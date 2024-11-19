// import { HttpClient } from '@angular/common/http';
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
    private router: Router
    // private http: HttpClient
    ){}

//     loggedInTeacherId: number = 1;
// // Method to handle the "Submit" button click
// submitTimetable() {
//   // Query all input fields in the table
//   const inputs = document.querySelectorAll('table tbody tr td input');
//   const timetableEntries: any[] = [];
  
//   // Map the inputs into JSON objects with teacherId, day, and period
//   inputs.forEach((input, index) => {
//     const value = (input as HTMLInputElement).value.trim();
//     if (value) {
//       const rowIndex = Math.floor(index / 8); // Calculate the row (day)
//       const colIndex = (index % 8) + 1; // Calculate the period
//       timetableEntries.push({
//         teacherId: this.loggedInTeacherId,
//         day: rowIndex + 1, // Days: Monday=1, Tuesday=2, etc.
//         period: colIndex,
//         grade: value
//       });
//     }
//   });

//   // Send POST request for each JSON object
//   timetableEntries.forEach(entry => {
//     this.http.post('http://localhost:8080/api/timetable', entry).subscribe({
//       next: response => console.log('Entry added successfully:', response),
//       error: err => console.error('Error adding entry:', err)
//     });
//   });
// }


  navigateToConfirmTimTblPage(){
    this.router.navigate(['confirm-time-table-page'])
  }
}
