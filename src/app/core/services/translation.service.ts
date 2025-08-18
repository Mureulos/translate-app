import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslationResponse } from '../responses/translate-response';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private readonly _apiUrl = environment.myMemoryApi;

  constructor(private http: HttpClient) { }

  public translateApi(
    text: string, 
    sourceLang: string, 
    targetLang: string
  ): Observable<TranslationResponse> {
    const params = {
      q: text,
      langpair: `${sourceLang}|${targetLang}`
    };

    return this.http.get<TranslationResponse>(this._apiUrl, { params });
  }
} 
