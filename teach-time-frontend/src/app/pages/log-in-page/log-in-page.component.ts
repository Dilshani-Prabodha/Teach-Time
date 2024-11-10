import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in-page',
  standalone: true,
  imports: [],
  templateUrl: './log-in-page.component.html',
  styleUrl: './log-in-page.component.css'
})
export class LogInPageComponent {

  
  constructor(
    private router: Router
  ){}

  navigateToSignUpPage() {
    this.router.navigate(['register-page']);
  }

}
