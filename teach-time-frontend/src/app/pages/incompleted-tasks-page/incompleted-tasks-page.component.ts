import { Component } from '@angular/core';
import { NavBarComponent } from "../../common/nav-bar/nav-bar.component";

@Component({
  selector: 'app-incompleted-tasks-page',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './incompleted-tasks-page.component.html',
  styleUrl: './incompleted-tasks-page.component.css'
})
export class IncompletedTasksPageComponent {

}
