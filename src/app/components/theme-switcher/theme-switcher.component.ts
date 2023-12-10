import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent {
  isChecked: boolean = false;

  constructor(private themeService: ThemeService) {}
  toggleMode() {
    this.themeService.switchTheme(this.isChecked);
 }
}
