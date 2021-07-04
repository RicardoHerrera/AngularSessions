import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `<re-captcha
    (resolved)="resolved($event)"
    siteKey="6Lcpol0bAAAAADdTAU43GhWbK42oQSqc5UJntcSk"
  ></re-captcha>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'M24A';
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
}
