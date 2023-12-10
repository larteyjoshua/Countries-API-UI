import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.scss']
})
export class BackComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/']);
  }

}
