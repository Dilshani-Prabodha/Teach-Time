import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-log-in-page',
  standalone: true,
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css'],
  imports: [FormsModule, CommonModule, HttpClientModule],
})
export class LogInPageComponent {
  loginData = {
    userName: '',
    password: '',
    remenberMe: false,
  };

  teacherList: any[] = [];

  constructor(private router: Router, private http: HttpClient) {
    this.loardTeachers();
  }

  loardTeachers() {
    this.http.get('http://localhost:8080/teacher/get-allteacher').subscribe(
      (data) => {
        this.teacherList = data as any[];
      },
      (error) => {
        console.error('Error fetching teacher list:', error);
      }
    );
  }

  actionOnbtnLogin() {
    console.log('Login Submitted:', this.loginData);

    const foundTeacher = this.teacherList.find(
      (teacher) =>
        teacher.userName === this.loginData.userName &&
        teacher.password === this.loginData.password
    );

    if (foundTeacher) {
      alert('Login successfully!');
      this.router.navigate(['create-time-table-page']);
    } else {
      alert('Invalid username or password.');
    }
  }

  navigateToSignUpPage() {
    this.router.navigate(['register-page']);
  }
}
