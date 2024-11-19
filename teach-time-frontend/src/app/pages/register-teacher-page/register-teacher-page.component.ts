import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-teacher-page',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './register-teacher-page.component.html',
  styleUrls: ['./register-teacher-page.component.css']
})


export class RegisterTeacherPageComponent {

  public teacher:any={
    // teacherId:"",
    teacherName:"",
    schoolName:"",
    subject:"",
    email:"",
    contactNumber:"",
    userName:"",
    password:""
  };

  async addTeacher(){

      // Check if any field is empty
      if (
        !this.teacher.teacherName.trim() ||
        !this.teacher.schoolName.trim() ||
        !this.teacher.subject.trim() ||
        !this.teacher.email.trim() ||
        !this.teacher.contactNumber.trim() ||
        !this.teacher.userName.trim() ||
        !this.teacher.password.trim()
      ) {
        alert("All fields are required. Please fill in all the details.");
        return; 
      }

          // Send teacher data to the backend
    this.http.post('http://localhost:8080/teacher/add-teacher', this.teacher).subscribe({
      next: (data: any) => {
        alert('You Registered Successfully!!!');
        // Store the registered teacher's details in local storage
        localStorage.setItem('loggedInUser', JSON.stringify(data));
        this.router.navigate(['create-time-table-page']);
      },
      error: (err) => {
        console.error('Error registering teacher:', err);
        alert('Registration failed. Please try again.');
      },
    });

  //   this.http.post("http://localhost:8080/teacher/add-teacher", this.teacher).subscribe((data)=>{
  //     alert("You Registered Successfully!!!");

  //   this.router.navigate(['create-time-table-page']);
  //   })
  }

  constructor(
    private router: Router,
    private http:HttpClient
  ){}    
}