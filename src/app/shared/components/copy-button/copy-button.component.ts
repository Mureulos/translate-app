import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { UtilsService } from '../../utils.service';

@Component({
  selector: 'app-copy-button',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './copy-button.component.html',
  styleUrl: './copy-button.component.scss'
})
export class CopyButtonComponent {
  @Input() copy: string = '';

  public copyText(text: string): void {
    UtilsService.copyToClickboard(text);
  }
}
