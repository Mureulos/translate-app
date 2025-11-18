import { Component, effect, input, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CopyButtonComponent } from '../copy-button/copy-button.component';
import { LangSelectorComponent } from '../lang-selector/lang-selector.component';

@Component({
  selector: 'app-panel-display',
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
  templateUrl: './panel-display.component.html',
  styleUrl: './panel-display.component.scss'
})
export class PanelDisplayComponent {
  public translationControl = new FormControl('');
  public translation = input('');

  constructor() {
    effect(() => {
      const novoValor = this.translation(); 
      this.translationControl.setValue(novoValor);
    });
  }
}
