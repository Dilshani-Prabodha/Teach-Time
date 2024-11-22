import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "../../common/nav-bar/nav-bar.component";
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-tasks-page',
  standalone: true,
  imports: [NavBarComponent, FormsModule, HttpClientModule, CommonModule],
  templateUrl: './add-tasks-page.component.html',
  styleUrls: ['./add-tasks-page.component.css']
})
export class AddTasksPageComponent implements OnInit {

  public date: string = '';
  period: number = 0;
  grade: string = '';
  tasks: any[] = [];
  uncheckedTasks: any[] = [];
  newTask: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

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

      console.log('Loaded Params:', { date: this.date, period: this.period, grade: this.grade }); // Load tasks based on the selected date, period, and grade

      this.loadTasks();  // Load tasks for the specified date, period, and grade
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
    const teacherId = JSON.parse(localStorage.getItem('loggedInUser') || '{}').id || 2;

    this.http.get(`http://localhost:8080/add-tasks/filter`, {
      params: {
        teacherId: teacherId.toString(),
        date: this.date,
        period: this.period.toString(),
        grade: this.grade
      }
    }).subscribe({
      next: (response: any) => {
        console.log('Fetched tasks:', response);
        
        this.tasks = response;
        this.filterUncheckedTasks();  // Filter unchecked tasks after loading tasks
        console.log(this.tasks);
      },
      error: (error) => {
        console.error('Error fetching tasks:', error);
        this.tasks = []; // Reset tasks if an error occurs
      }
    });
    
  }

  addTask() {
    const trimmedTask = this.newTask.trim();

    if (trimmedTask !== '') {
      const taskData = {
        teacherId: JSON.parse(localStorage.getItem('loggedInUser') || '{}').id || 2,
        date: this.date,
        period: this.period,
        grade: this.grade,
        task: this.newTask,
        check: false
      };

      // Save the task to the backend
      this.http.post('http://localhost:8080/add-tasks/add', taskData).subscribe({
        next: (response) => {
          console.log('Task added successfully:', response);
          this.newTask = ''; // Reset the input field
          this.loadTasks(); // Refresh the tasks list after adding the task
        },
        error: (error) => {
          console.error('Error adding task:', error);
        }
      });
    } else {
      alert('Please enter a valid task!');
    }
  }

  editTask(task: any) {
    const updatedTask = prompt('Edit the task name');
    if (updatedTask) {
      task.task = updatedTask;
      console.log('Updated Task:', task);  // Log the task before sending it
  
      this.http.put("http://localhost:8080/add-tasks/update", task).subscribe(
        (response) => {
          console.log('Task updated successfully:', response);
          this.loadTasks();  // Reload tasks after editing
        },
        (error) => {
          console.error('Error updating task:', error);
        }
      );
    }
  }
  
  
  reassignTask(task: any) {
    const newDate = prompt('Enter new date for reassigning the task:');
    if (newDate) {
      task.date = newDate;
      this.http.put("http://localhost:8080/add-tasks/update", task).subscribe(
        (response) => {
          console.log('Task date reassigned successfully:', response);
          alert(`Task date reassigned to ${newDate}`);
          this.loadTasks(); // Reload tasks after reassigning
        },
        (error) => {
          console.error('Error reassigning task:', error);
        }
      );
    } else {
      alert('Invalid date format.');
    }
  }

  deleteTask(task: any) {
    const confirmation = confirm(`Are you sure you want to delete the task "${task.task}"?`);
    if (confirmation) {
      this.http.delete(`http://localhost:8080/add-tasks/delete/${task.taskId}`).subscribe({
        next: () => {
          alert('Task deleted successfully.');
          this.loadTasks(); // Reload tasks after deleting
        },
        error: (error) => {
          console.error('Error deleting task:', error);
          alert('Failed to delete the task. Please try again later.');
        }
      });
    }
  }

  filterUncheckedTasks(): void {
    this.uncheckedTasks = this.tasks.filter((task: { check: boolean }) => task.check === false);
    console.log('Unchecked Tasks:', this.uncheckedTasks);
  }

  completeTask(event: Event, task: any): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    task.check = isChecked;
    this.http.put("http://localhost:8080/add-tasks/update", task).subscribe(
      (response) => {
        console.log('Profile updated successfully:', response);
      })
  }
}
