import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loading$ = new BehaviorSubject<boolean>(false);

  get loading(): boolean {
    return this.loading$.value;
  }

  setLoading(loading: boolean): void {
    this.loading$.next(loading);
  }
}
