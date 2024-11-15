import { Component } from '@angular/core';
import { NavBarComponent } from "../../common/nav-bar/nav-bar.component";

@Component({
  selector: 'app-add-tasks-page',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './add-tasks-page.component.html',
  styleUrl: './add-tasks-page.component.css'
})
export class AddTasksPageComponent {

  // tasks = [
  //   { text: 'Explain photosynthesis part one.' },
  //   { text: 'Discuss Home works.' }
  // ];
  // newTask: string = '';

  // addTask() {
  //   if (this.newTask.trim()) {
  //     this.tasks.unshift({ text: this.newTask.trim() });
  //     this.newTask = '';
  //   }
  // }


}
