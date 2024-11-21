import { Component, OnInit } from '@angular/core'; 
import { NavBarComponent } from "../../common/nav-bar/nav-bar.component";
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-tasks-page',
  standalone: true,
  imports: [NavBarComponent, FormsModule, HttpClientModule],
  templateUrl: './add-tasks-page.component.html',
  styleUrls: ['./add-tasks-page.component.css'] 
})
export class AddTasksPageComponent implements OnInit {

  public date: string = '';
  period: number = 0;
  grade: string = '';
  tasks: string[] = []; 
  newTask: string = ''; 

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log('Received Params:', params); // Log to check all parameters
      this.date = params['date'] || '';  // Set date from query params
      this.period = params['period'];  // Set period from query params
      this.grade = params['grade'];  // Set grade from query params

      console.log('Received date:', this.date);  // Check if 'date' is valid

      // If date is undefined or invalid, set a fallback date
      if (!this.date) {
        this.date = this.getCurrentDate();  // Set current date if no date is passed
      }

      // Check and format the date if necessary
      if (this.date && !this.isValidDate(this.date)) {
        this.date = this.formatDate(this.date);  // Format to "yyyy-MM-dd"
      }

      this.loadTasks();  // Load tasks based on the selected date, period, and grade
    });
  }

  // Helper function to check if the date is in correct format
  isValidDate(date: string): boolean {
    const regex = /^\d{4}-\d{2}-\d{2}$/;  // Check if the date is in the correct format
    return regex.test(date);
  }

  // Helper function to format the date to "yyyy-MM-dd"
  formatDate(date: string): string {
    const newDate = new Date(date);
    return newDate.toISOString().split('T')[0];  // Convert to "yyyy-MM-dd" format
  }

  // Helper function to get today's date in "yyyy-MM-dd" format
  getCurrentDate(): string {
    const today = new Date();
    return today.toISOString().split('T')[0]; // Format date to "yyyy-MM-dd"
  }

  loadTasks() {
    const teacherId = JSON.parse(localStorage.getItem('loggedInUser') || '{}').id || 2; // Replace '2' with dynamic teacherId
    this.http.get(`http://localhost:8080/add-tasks/get-teacher-task/${teacherId}`)
      .subscribe({
        next: (response: any) => {
          console.log(response); // Log API response
          this.tasks = response.map((task: any) => task.taskName || task.name || "Unnamed Task");
        },
        error: (error) => {
          console.error('Error fetching tasks:', error);
        }
      });
  }

  addTask() {
    if (this.newTask.trim()) {
      this.saveTask();
    }
  }

  saveTask() {
    const teacherId = JSON.parse(localStorage.getItem('loggedInUser') || '{}').id || 2; // Replace '2' with dynamic teacherId

    const taskData = {
      date: this.date,
      period: this.period,
      grade: this.grade,
      taskName: this.newTask,
      teacherId: teacherId
    };

    this.http.post('http://localhost:8080/add-tasks/add', taskData).subscribe({
      next: (response) => {
        console.log('Task added successfully:', response);
        this.tasks.push(this.newTask); // Add the new task to the list
        this.newTask = ''; // Reset the input
      },
      error: (error) => {
        console.error('Error adding task:', error);
      }
    });
  }

  removeOldTasks() {
    this.tasks = [];
  }
}
