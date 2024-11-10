import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-teacher-page',
  standalone: true,
  imports: [],
  templateUrl: './register-teacher-page.component.html',
  styleUrl: './register-teacher-page.component.css'
})
export class RegisterTeacherPageComponent {

  constructor(
    private router: Router
  ){}

  navigateToCreateTimeTablePage() {
    this.router.navigate(['create-time-table-page']);
  }
}
