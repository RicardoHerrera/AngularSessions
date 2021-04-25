import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title = 'E31A';
  loginForm = this.formBuilder.group({
    username: '',
    password: '',
  });

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.router = router;
  }

  ngOnInit() {
    //chequear user password y mandar pa /
    if (window.localStorage.getItem('user') !== null) {
      this.router.navigate(['/']);
    }
  }

  login() {
    console.log(this.loginForm.value);
    if (this.loginForm.value.username && this.loginForm.value.password) {
      window.localStorage.setItem(
        'user',
        JSON.stringify({
          username: this.loginForm.value.username,
          password: this.loginForm.value.password,
        })
      );
      this.router.navigate(['/']);
    }
  }

  onSubmit() {
    this.login();
  }
}
