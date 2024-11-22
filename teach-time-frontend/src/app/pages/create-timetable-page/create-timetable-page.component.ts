import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-timetable-page',
  standalone: true,
  imports: [],
  templateUrl: './create-timetable-page.component.html',
  styleUrl: './create-timetable-page.component.css'
})
export class CreateTimetablePageComponent {

  constructor(
    private router: Router,
    private http: HttpClient
    ){}


  // Variable to hold the logged-in teacher's ID
  loggedInTeacherId: number | null = null;

  ngOnInit() {
    // Retrieve the logged-in teacher's information from localStorage
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');

    // If a logged-in user is found, set the loggedInTeacherId
    if (loggedInUser && loggedInUser.teacherId) {
      this.loggedInTeacherId = loggedInUser.teacherId;
    } else {
      // Handle case when no logged-in user is found (optional, e.g., redirect to login)
      alert('Please log in to submit the timetable.');
      this.router.navigate(['log-in-page']);
    }
  }


// Method to handle the "Submit" button click
submitTimetable() {
  
  const inputs = document.querySelectorAll('table tbody tr td input');
  const timetableEntries: any[] = [];
  
  inputs.forEach((input, index) => {
    const value = (input as HTMLInputElement).value.trim();
    if (value) {
      const rowIndex = Math.floor(index / 8); // Calculate the row (day)
      const colIndex = (index % 8) + 1; // Calculate the period
      timetableEntries.push({
        teacherId: this.loggedInTeacherId,
        day: rowIndex + 1, // Days: Monday=1, Tuesday=2, 
        period: colIndex,
        grade: value
      });
    }
  });

  // Send POST request for each JSON object
  timetableEntries.forEach(entry => {
    this.http.post('http://localhost:8080/time-table/add-grade', entry).subscribe({
      next: response => console.log('Entry added successfully:', response),
      error: err => console.error('Error adding entry:', err)
    });
  });

  if (timetableEntries.length > 0) {
        
        alert('Timetable submitted successfully!');
        this.navigateToConfirmTimTblPage();
  } else {
    alert('No entries to submit. Please fill in the timetable.');
  }
}

  navigateToConfirmTimTblPage(){
    this.router.navigate(['home-page']);
  }
}
