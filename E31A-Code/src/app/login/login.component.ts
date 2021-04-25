import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title = 'E31A';
  user = '';
  pass = '';

  constructor(private router: Router) {
    this.router = router;
  }

  ngOnInit() {
    //chequear user password y mandar pa /
    if (window.localStorage.getItem('user') !== null) {
      this.router.navigate(['/']);
    }
  }

  login() {
    if (this.user && this.pass) {
      window.localStorage.setItem(
        'user',
        JSON.stringify({
          username: this.user,
          password: this.pass,
        })
      );
      this.router.navigate(['/']);
    }
  }
}
