import { Component } from '@angular/core';
import { NavBarComponent } from '../../common/nav-bar/nav-bar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(
    private router: Router
  ){}

  navigateToAssignPage() {
    this.router.navigate(['assign-tasks-page']);
  }

  navigateToViewAssignedPage() {
    this.router.navigate(['add-tasks-page']);
  }
  navigateToReassignPage() {
    this.router.navigate(['reassign-task-page']);
  }
  navigateToCompletedTasksPage() {
    this.router.navigate(['completed-tasks-page']);
  }
}