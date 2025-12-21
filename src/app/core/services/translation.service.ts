import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslationResponse } from '../types/responses/translate-response';
import { API_URL } from '../tokens/api.token';
import { TranslationRequest } from '../types/requests/translation.interface';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private readonly _apiUrl = inject(API_URL);
  private readonly _http = inject(HttpClient);

  public translation(
    text: string, 
    sourceLanguageId: number, 
    targetLanguageId: number
  ): Observable<TranslationResponse> {
    // const params = new HttpParams()
    //   .set('text', text)
    //   .set('sourceLanguageId', sourceLanguageId)
    //   .set('targetLanguageId', targetLanguageId);

    return this._http.post<TranslationResponse>(`${this._apiUrl}translation`, { 
      text: text,
      sourceLanguageId: sourceLanguageId,
      targetLanguageId: targetLanguageId 
    });
  }
} 
