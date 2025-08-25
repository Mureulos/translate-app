import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CopyButtonComponent } from '../copy-button/copy-button.component';

@Component({
  selector: 'app-panel-display',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    CopyButtonComponent
  ],
  templateUrl: './panel-display.component.html',
  styleUrl: './panel-display.component.scss'
})
export class PanelDisplayComponent implements OnChanges {
  public translationControl = new FormControl('');
  @Input() translation: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['translation'] && this.translation) {
      this.translationControl.setValue(this.translation);
    }
  }
}
