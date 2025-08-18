import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { TranslationService } from '../../../core/services/translation.service';
import { PanelComponent } from '../../../shared/components/panel/panel.component';

@Component({
  selector: 'app-dashboard',
  imports: [PanelComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  text: string = 'Hello, how are you?';
  sourceLang: string = 'en';
  targetLang: string = 'fr';
  translation: string = '';

  constructor(private translationService: TranslationService) { }

  ngOnInit(): void {
    this.getTranslate();
  }

  private getTranslate() {
    this.translationService.translateApi(
      this.text,
      this.sourceLang,
      this.targetLang
    ).subscribe({
      next: response => {
        this.translation = response.responseData.translatedText;
      }
    })
  }

  public updateText(text: string): void {
    this.text = text;
  }

  public updateSourceLang(source: string): void {
    this.sourceLang = source;
  }

  public updateTargetLang(target: string): void {
    this.targetLang = target;
  }
}