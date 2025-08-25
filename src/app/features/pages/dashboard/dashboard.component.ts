import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslationService } from '../../../core/services/translation.service';
import { PanelDisplayComponent } from "../../../shared/components/panel-display/panel-display.component";
import { PanelInputComponent } from '../../../shared/components/panel-input/panel-input.component';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PanelDisplayComponent, PanelInputComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, OnDestroy {
  private _textChange = new Subject<string>();
  private _subscription!: Subscription;
  
  public text: string = 'Hello, how are you?';
  public sourceLang: string = 'en';
  public targetLang: string = 'fr';
  public translation: string = '';
  public loading: boolean = false;

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this._subscription = this._textChange
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(text => {
          this.loading = true;
          return this.translationService.translateApi(
            text, 
            this.sourceLang, 
            this.targetLang
          );
        })
      )
      .subscribe({
        next: response => {
          this.translation = response.responseData.translatedText;
        },
        error: () => this.loading = false,
        complete: () => this.loading = false,
      });

    this._textChange.next(this.text);
  }

  public updateText(text: string): void {
    this.text = text;
    this._textChange.next(text);
  }

  public updateSourceLang(source: string): void {
    this.sourceLang = source;
    this._textChange.next(this.text);
  }

  public updateTargetLang(target: string): void {
    this.targetLang = target;
    this._textChange.next(this.text);
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
