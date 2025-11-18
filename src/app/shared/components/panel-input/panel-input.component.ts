import { Component, effect, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs';
import { CopyButtonComponent } from '../copy-button/copy-button.component';
import { LangSelectorComponent } from '../lang-selector/lang-selector.component';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-panel-input',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    CopyButtonComponent,
    LangSelectorComponent
  ],
  templateUrl: './panel-input.component.html',
  styleUrl: './panel-input.component.scss'
})
export class PanelInputComponent {
  public translationControl = new FormControl(
    'hello, how are you?', 
    [
      Validators.required,
      Validators.maxLength(500)
    ]
  );

  public debouncedValue = toSignal(
    this.translationControl.valueChanges.pipe(
      startWith(this.translationControl.value),
      debounceTime(500),
      distinctUntilChanged()
    )
  );
  
  public textEvent = output<string>();

  constructor() {
    effect(() => {
      const value = this.debouncedValue();

      if (value) 
        this.textEvent.emit(value);
    });
  }

  public submitTranslation(): void {
    if (this.translationControl.valid) {
      this.textEvent.emit(this.translationControl.value ?? '');
    }
  }
}