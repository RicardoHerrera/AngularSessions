import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
    if (window.localStorage.getItem('user') === null) {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    window.localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
