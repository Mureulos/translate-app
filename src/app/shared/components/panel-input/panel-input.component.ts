import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';
import { CopyButtonComponent } from '../copy-button/copy-button.component';

@Component({
  selector: 'app-panel-input',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    CopyButtonComponent
  ],
  templateUrl: './panel-input.component.html',
  styleUrl: './panel-input.component.scss'
})
export class PanelInputComponent implements OnDestroy {
  private _subscription: Subscription;

  public translationControl = new FormControl('hello, how are you?', [
    Validators.required,
    Validators.maxLength(500)
  ]);

  public formTranslation = new FormGroup({
    translationControl: this.translationControl
  });

  @Output() textEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this._subscription = new Subscription();

    /*this._subscription = this.translationControl.valueChanges
    .pipe(
      debounceTime(500),
      distinctUntilChanged()
    )
    .subscribe(value => {
      this.textEvent.emit(value ?? '');
    });*/
  }

  public submitTranslation(): void {
    if (this.formTranslation.valid)
      this.textEvent.emit(this.translationControl.value ?? '');
  }

  ngOnDestroy(): void {
    if (this._subscription)
      this._subscription.unsubscribe();
  }
}
