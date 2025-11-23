import { Component, computed, inject, input, ViewEncapsulation } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';
import { LanguageStateService } from '../../../core/services/language-state.service';
import { LanguageOptions } from '../../../core/types/language.interface';
import { SelectButtonModule } from 'primeng/selectbutton'
import { FormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-lang-selector',
  imports: [SelectButtonModule, FormsModule, MenuModule, ButtonModule],
  templateUrl: './lang-selector.component.html',
  styleUrl: './lang-selector.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class LangSelectorComponent {
  public _languageStateService = inject(LanguageStateService);
  public _languageService = inject(LanguageService);
  
  public target = input(false);
  
  public suggestionLanguages: LanguageOptions[] = [
    { name: 'English', code: 'en' },
    { name: 'French', code: 'fr' },
  ];

  public menuOptions: MenuItem[] = this._languageService.getLanguages()
  .map(l => ({
    label: l.name,
    command: () => this.setLanguage(l.code)
  }));

  public getLanguage = computed(() => {
    if (this.target() === true)
      return this._languageStateService.sourceLang();
    else
      return this._languageStateService.targetLang();
  });

  public currentLabel = computed(() => {
    const currentCode = this.getLanguage();

    const found = this._languageService.getLanguages().find((l) => l.code === currentCode);
    return found ? found.name : 'Selecione um idioma';
  });

  public setLanguage(code: string): void {
    if (!code) return; 

    if (this.target() === true)
      this._languageStateService.setSourceLang(code);
    else
      this._languageStateService.setTargetLang(code);
  }

  public swapLanguage (): void {
    const currentSource = this._languageStateService.sourceLang();
    const currentTarget = this._languageStateService.targetLang();

    this._languageStateService.setSourceLang(currentTarget);
    this._languageStateService.setTargetLang(currentSource);
  }
}
