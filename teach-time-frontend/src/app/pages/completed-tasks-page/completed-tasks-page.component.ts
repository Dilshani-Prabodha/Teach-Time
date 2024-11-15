import { Component } from '@angular/core';
import { NavBarComponent } from "../../common/nav-bar/nav-bar.component";

@Component({
  selector: 'app-completed-tasks-page',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './completed-tasks-page.component.html',
  styleUrl: './completed-tasks-page.component.css'
})
export class CompletedTasksPageComponent {

}
