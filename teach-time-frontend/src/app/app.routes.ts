import { RouterModule, Routes } from '@angular/router';
import { LogInPageComponent } from './pages/log-in-page/log-in-page.component';
import { RegisterTeacherPageComponent } from './pages/register-teacher-page/register-teacher-page.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { EditTeacherProfilePageComponent } from './pages/edit-teacher-profile-page/edit-teacher-profile-page.component';
import { CreateTimetablePageComponent } from './pages/create-timetable-page/create-timetable-page.component';
import { ConfirmTimetablePageComponent } from './pages/confirm-timetable-page/confirm-timetable-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AssignTasksPageComponent } from './pages/assign-tasks-page/assign-tasks-page.component';
import { AddTasksPageComponent } from './pages/add-tasks-page/add-tasks-page.component';
import { CompletedTasksPageComponent } from './pages/completed-tasks-page/completed-tasks-page.component';
import { IncompletedTasksPageComponent } from './pages/incompleted-tasks-page/incompleted-tasks-page.component';
import { ReassignTasksPageComponent } from './pages/reassign-tasks-page/reassign-tasks-page.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component:LogInPageComponent
    },
    {
        path:'register-page',
        component: RegisterTeacherPageComponent
    },

    {
        path:'create-time-table-page',
        component: CreateTimetablePageComponent
    },
    {
        path:'confirm-time-table-page',
        component: ConfirmTimetablePageComponent 
    },
    {
        
        path:'assign-tasks-page',
        component: AssignTasksPageComponent
    },
    {
        path:'add-tasks-page',
        component:AddTasksPageComponent
    },
    {
        path:'completed-tasks-page',
        component:CompletedTasksPageComponent
    },
    {
        path:'incompleted-tasks-page',
        component:IncompletedTasksPageComponent
    },
    {
        path:'reassign-task-page',
        component:ReassignTasksPageComponent
    },
    {
        path:'home-page',
        component: HomePageComponent
    },
    {
        path:'edit-teacher-profile',
        component: EditTeacherProfilePageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }