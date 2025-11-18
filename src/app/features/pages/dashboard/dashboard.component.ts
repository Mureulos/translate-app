import { Component, inject, signal } from '@angular/core';
import { TranslationService } from '../../../core/services/translation.service';
import { PanelDisplayComponent } from "../../../shared/components/panel-display/panel-display.component";
import { PanelInputComponent } from '../../../shared/components/panel-input/panel-input.component';
import { LanguageStateService } from '../../../core/services/language-state.service';
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
  public sourceLang = signal('en');
  public targetLang = signal('fr');
  public translation: string = '';

  public loading: boolean = false;
  private _translationService = inject(TranslationService);
  public _languageState = inject(LanguageStateService);

  private _translate(): void {
    if (!this.text || this.text.trim() === '') {
      this.translation = '';
      return;
    }

    this.loading = true;
    const source = this._languageState.sourceLang();
    const target = this._languageState.targetLang();

    this._translationService.translateApi(this.text, source, target)
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
    this._languageState.setSourceLang(source);
    this._translate();
  }

  public updateTargetLang(target: string): void {
    this._languageState.setTargetLang(target);
    this._translate();
  }
}