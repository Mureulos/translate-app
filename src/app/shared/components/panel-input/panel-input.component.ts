import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';

@Component({
  selector: 'app-panel-input',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './panel-input.component.html',
  styleUrl: './panel-input.component.scss'
})
export class PanelInputComponent implements OnDestroy {
  private _subscription: Subscription;
  public translationControl = new FormControl('');
  @Output() textEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this._subscription = this.translationControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(value => {
        this.textEvent.emit(value ?? '');
      });
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
