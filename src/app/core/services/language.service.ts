import { inject, Injectable } from '@angular/core';
import { Language } from '../types/language.interface';
import { API_URL } from '../tokens/api.token';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly _apiUrl = inject(API_URL);
  private readonly _http = inject(HttpClient);
  
  public getLanguages(): Observable<Language[]> {
    return this._http.get<Language[]>(`${this._apiUrl}language`);
  }

  public getLanguageById(languageId: number): Observable<Language> {
    const params = new HttpParams().set('id', languageId)
    return this._http.get<Language>(`${this._apiUrl}language`, { params });
  }
}
