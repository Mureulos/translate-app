import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../core/services/translation.service';
import { PanelDisplayComponent } from "../../../shared/components/panel-display/panel-display.component";
import { PanelInputComponent } from '../../../shared/components/panel-input/panel-input.component';
// Não precisamos mais de RxJS, Subject ou Subscription aqui
// import { Subject, Subscription } from 'rxjs';
// import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PanelDisplayComponent, PanelInputComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  public text: string = ''; 
  public sourceLang: string = 'en';
  public targetLang: string = 'fr';
  public translation: string = '';

  public loading: boolean = false;
  private _translationService = inject(TranslationService);

  private _translate(): void {
    if (!this.text || this.text.trim() === '') {
      this.translation = '';
      return;
    }

    this.loading = true;

    this._translationService.translateApi(this.text, this.sourceLang, this.targetLang)
    .subscribe({
      next: response => {
        this.translation = response.responseData.translatedText;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  public updateText(text: string): void {
    this.text = text;
    this._translate();
  }

  public updateSourceLang(source: string): void {
    this.sourceLang = source;
    this._translate();
  }

  public updateTargetLang(target: string): void {
    this.targetLang = target;
    this._translate();
  }
}