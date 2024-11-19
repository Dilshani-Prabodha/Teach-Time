import { Component } from '@angular/core';
import { NavBarComponent } from "../../common/nav-bar/nav-bar.component";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-assign-tasks-page',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './assign-tasks-page.component.html',
  styleUrl: './assign-tasks-page.component.css'
})
export class AssignTasksPageComponent {

  public gradeList:any = [];

  constructor(
    private router: Router,
    private http: HttpClient
  ){this.loardTimeTable();}

  loardTimeTable(){
    this.http.get("http://localhost:8080/time-table/get-all-grades").subscribe(data=>{
      console.log(data);
      this.gradeList = data;
    })
  }

  navigateAddTaskPage() {
    this.router.navigate(['add-tasks-page']);
  }
}
