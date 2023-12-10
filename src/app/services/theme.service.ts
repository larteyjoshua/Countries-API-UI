import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  isThemeChanged: Subject<boolean> = new Subject();
  constructor(@Inject(DOCUMENT) private document: Document) {

}

  switchTheme(isChecked: boolean) {
    this.isThemeChanged.next(isChecked);
        const themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

    if (themeLink) {
      if (isChecked) {
           themeLink.href = 'bootstrap4-dark-blue.css';
      }
      else {
         themeLink.href = 'bootstrap4-light-blue.css';
      }

        }
  }

  getThemeChange() {
    return this.isThemeChanged;
  }
}
