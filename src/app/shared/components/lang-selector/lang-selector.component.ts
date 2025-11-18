import { Component, computed, inject, input, signal } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';
import { LanguageStateService } from '../../../core/services/language-state.service';

@Component({
  selector: 'app-lang-selector',
  imports: [],
  templateUrl: './lang-selector.component.html',
  styleUrl: './lang-selector.component.scss'
})
export class LangSelectorComponent {
    public target = input(false);

    public firstSuggestion = signal('English');
    public secondSuggestion = signal('French');
    public thirdSuggestion = signal('Spanish');

    public _languageState = inject(LanguageStateService);
    public _languages = inject(LanguageService);

    public suggestions = [
      { name: 'English', code: 'en' },
      { name: 'French', code: 'fr' },
      { name: 'Spanish', code: 'es' },
    ];

    public activeLang = computed(() => {
      if (this.target() === true)
        return this._languageState.sourceLang();
      else
        return this._languageState.targetLang();
    });

    public selectLanguage(code: string): void {
      if (this.target() === true)
        this._languageState.setSourceLang(code);
      else
        this._languageState.setTargetLang(code);
    }
  
    public selectFromDropdown(event: Event): void {
      const code = (event.target as HTMLSelectElement).value;
      this.selectLanguage(code);
    }
}
