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
  styleUrl: './register-teacher-page.component.css'
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
    this.http.post("http://localhost:8080/teacher/add-teacher", this.teacher).subscribe((data)=>{
      alert("You Registered Successfully!!!");

    this.router.navigate(['create-time-table-page']);
    })
  }

  constructor(
    private router: Router,
    private http:HttpClient
  ){}

    
}