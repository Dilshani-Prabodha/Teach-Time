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
    ){}

  navigateToConfirmTimTblPage(){
    this.router.navigate(['confirm-time-table-page'])
  }
}
