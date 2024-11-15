import { Component } from '@angular/core';
import { NavBarComponent } from "../../common/nav-bar/nav-bar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-assign-tasks-page',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './assign-tasks-page.component.html',
  styleUrl: './assign-tasks-page.component.css'
})
export class AssignTasksPageComponent {

  constructor(
    private router: Router
  ){}

  navigateAddTaskPage() {
    this.router.navigate(['add-tasks-page']);
  }
}
