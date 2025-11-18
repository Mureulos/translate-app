import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageStateService {
    private _sourceLang = signal('en');
    private _targetLang = signal('fr');

    public readonly sourceLang = this._sourceLang.asReadonly();
    public readonly targetLang = this._targetLang.asReadonly();

    public setSourceLang(lang: string): void {
        this._sourceLang.set(lang);
    }
    
    public setTargetLang(lang: string): void {
        this._targetLang.set(lang);
    }
}
