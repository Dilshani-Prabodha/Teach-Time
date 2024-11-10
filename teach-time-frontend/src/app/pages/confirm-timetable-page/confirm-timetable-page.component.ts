import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-timetable-page',
  standalone: true,
  imports: [],
  templateUrl: './confirm-timetable-page.component.html',
  styleUrl: './confirm-timetable-page.component.css'
})
export class ConfirmTimetablePageComponent {

  constructor(
    private router: Router
  ){}

  navigateToCreateTimTblPage() {
    this.router.navigate(['create-time-table-page']);
  }
}
