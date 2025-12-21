import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageStateService {
    private _sourceLang = signal(1);
    private _targetLang = signal(2);

    public readonly sourceLang = this._sourceLang.asReadonly();
    public readonly targetLang = this._targetLang.asReadonly();

    public setSourceLang(language: number): void {
        this._sourceLang.set(language);
    }
    
    public setTargetLang(language: number): void {
        this._targetLang.set(language);
    }
}
