// splash.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: 'splash.page.html',
  styleUrls: ['splash.page.scss'],
})
export class SplashPage {

  constructor(private router: Router) {
    setTimeout(() => {
      this.router.navigate(['/login']); // Navegar a la página principal después de 3 segundos
    }, 2000);
  }
}
