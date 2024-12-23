import { Component } from '@angular/core';
import { NavBarComponent } from "../../common/nav-bar/nav-bar.component";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assign-tasks-page',
  standalone: true,
  imports: [NavBarComponent,FormsModule],
  templateUrl: './assign-tasks-page.component.html',
  styleUrl: './assign-tasks-page.component.css'
})
export class AssignTasksPageComponent {

  public selectedDate: string = '';
  public gradeList:any = [];

  constructor(
    private router: Router,
    private http: HttpClient
  ){this.loadTimeTable();}

  // loardTimeTable(){
  //   this.http.get("http://localhost:8080/time-table/get-all-grades").subscribe(data=>{
  //     console.log(data);
  //     this.gradeList = data;
  //   })
  // }

  loadTimeTable() {
    // Get the logged-in teacher's ID from localStorage
    const loggedInTeacher = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    const teacherId = loggedInTeacher.teacherId;

    if (!teacherId) {
      console.error('Teacher ID not found in local storage.');
      return;
    }

    // Fetch grades from backend
    this.http.get('http://localhost:8080/time-table/get-all-grades').subscribe(
      (data: any) => {
        console.log('Fetched Grades:', data);
        
        // Filter grades belonging to the logged-in teacher
        this.gradeList = data.filter((grade: any) => grade.teacherId === teacherId);
      },
      (error) => {
        console.error('Error fetching grade list:', error);
      }
      
    );
  }

  
  navigateAddTaskPage(date: string, period: number, grade: string) {
    // console.log('Navigating with:', { date, period, grade });
  if (!this.selectedDate) {
      console.error('No date selected');
      return;
  }
  this.router.navigate(['add-tasks-page'], {
      queryParams: { date: this.selectedDate, period, grade }
  });




    // this.router.navigate(['add-tasks-page'], {
    //     queryParams: { date, period, grade }
    // });
}

// navigateAddTaskPage(period: number, grade: string) {
//   if (!this.selectedDate) {
//       console.error('No date selected');
//       return;
//   }
//   this.router.navigate(['add-tasks-page'], {
//       queryParams: { date: this.selectedDate, period, grade }
//   });
// }

}