import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private _moduleTitle: BehaviorSubject<string> = new BehaviorSubject<string>('Captación Imágenes');
  title$ = this._moduleTitle.asObservable();

  constructor() { }

  setModuleTitle(title: string) {
    this._moduleTitle.next(title);
  }
}
