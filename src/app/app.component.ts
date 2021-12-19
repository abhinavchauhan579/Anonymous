import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AnonymousUI';

  constructor(private service:SharedService, private router: Router) { }

  public logout() {
    this.service.loggedIn = false;
    this.router.navigateByUrl('login');
  }
}
