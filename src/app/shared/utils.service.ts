import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor() {}

  static copyToClickboard(textToCopy: string): void {
    if (navigator.clipboard)
      navigator.clipboard.writeText(textToCopy)
  }
}
