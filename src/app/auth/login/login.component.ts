import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  setMessage() {
    this.message = `Logged ${this.authService.isLoggedIn ? 'in' : 'out'}`;
  }

  login() {
    this.message = 'Trying to login ...';

    this.authService.login().subscribe( val => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        const redirectUrl = this.authService.redirectUrl? this.router.parseUrl(this.authService.redirectUrl): '/admin';
        this.router.navigateByUrl(redirectUrl);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
