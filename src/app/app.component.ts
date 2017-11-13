import { Component } from '@angular/core';
import { Router,Event as RouterEvent, NavigationStart,NavigationEnd,NavigationCancel,NavigationError} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   loading: boolean = true;

  constructor(private _router: Router)  {
    _router.events.subscribe((event: RouterEvent) => {
       this.checkRouterEvent(event);
    });
  }
  checkRouterEvent(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    }

    if (event instanceof NavigationEnd ||
      event instanceof NavigationCancel ||
      event instanceof NavigationError) {
      this.loading = false;
    }
  }
}