import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavBarComponent } from "../../common/nav-bar/nav-bar.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks-page.component.html',
  styleUrls: ['./completed-tasks-page.component.css'],
  standalone: true,
  imports: [NavBarComponent,CommonModule,FormsModule]
})
export class CompletedTasksPageComponent implements OnInit {
  completedTasks: any[] = [];
  date: string = '';
  grade: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadCompletedTasks();
  }

  loadCompletedTasks(): void {
    // Fetch completed tasks from the backend
    this.http.get('http://localhost:8080/completed-task/get-all-tasks').subscribe({
      next: (response: any) => {
        console.log('Completed tasks fetched:', response);
        this.completedTasks = response;
      },
      error: (error) => {
        console.error('Error fetching completed tasks:', error);
      }
    });
  }

  searchCompletedTasks(): void {
    const params = {
      date: this.date,
      grade: this.grade
    };

    this.http.get('http://localhost:8080/completed-tasks/filter', { params }).subscribe({
      next: (response: any) => {
        console.log('Filtered completed tasks:', response);
        this.completedTasks = response;
      },
      error: (error) => {
        console.error('Error filtering completed tasks:', error);
      }
    });
  }
}
