import { Component, effect, input, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LangSelectorComponent } from '../lang-selector/lang-selector.component';
import { UtilsService } from '../../utils.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-panel-display',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    LangSelectorComponent,
    ButtonModule
  ],
  templateUrl: './panel-display.component.html',
  styleUrl: './panel-display.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class PanelDisplayComponent {
  public translationControl = new FormControl('');
  public translation = input('');

  constructor() {
    console.log(this.translation())

    effect(() => {
      const newValue = this.translation(); 
      this.translationControl.setValue(newValue);
    });
  }

  public copyText(text: string): void {
    UtilsService.copyToClickboard(text);
  }
}
