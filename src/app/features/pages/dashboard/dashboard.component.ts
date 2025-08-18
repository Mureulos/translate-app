import { Component, OnInit } from '@angular/core';
import { PanelComponent } from '../../../shared/components/panel/panel.component';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.Translate('Olá, tudo bem?', 'pt-br', 'en').subscribe({
      next: response => {
        console.log(response.responseData.translatedText)
      }
    })
  }
}
