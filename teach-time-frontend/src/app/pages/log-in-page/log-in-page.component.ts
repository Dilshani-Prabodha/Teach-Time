import { HttpClient } from '@angular/common/http';
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

  loginData={
    userName:'',
    password:'',
    remenberMe:false
  };

  public teacherList: any = [];
  
  constructor(private router: Router, private http: HttpClient){
    this.loardTeachers();
  }

  loardTeachers(){
    this.http.get("http://localhost:8080/teacher/get-allteacher").subscribe(data =>{
      this.teacherList = data;
    });
  }

  actionOnbtnLogin(){
    console.log('Loging Submitted:', this.loginData);
    const foundTeacher = this.teacherList.find((loggedteacher: any) =>
    loggedteacher.userName === this.loginData.userName && loggedteacher.password === this.loginData.password
  );
  if(foundTeacher){
    alert('Login successfully!!!');
    this.router.navigate(["create-time-table-page"]);
  } else{
    alert('Invalid email or password. Try again.');
  }
  }

  navigateToSignUpPage() {
    this.router.navigate(['register-page']);
  }
}
