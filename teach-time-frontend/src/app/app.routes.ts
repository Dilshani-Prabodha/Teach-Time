import { Routes } from '@angular/router';
import { LogInPageComponent } from './pages/log-in-page/log-in-page.component';
import { RegisterTeacherPageComponent } from './pages/register-teacher-page/register-teacher-page.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { EditTeacherProfilePageComponent } from './pages/edit-teacher-profile-page/edit-teacher-profile-page.component';
import { CreateTimetablePageComponent } from './pages/create-timetable-page/create-timetable-page.component';
import { ConfirmTimetablePageComponent } from './pages/confirm-timetable-page/confirm-timetable-page.component';

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
        path:'edit-profile-page',
        component: EditTeacherProfilePageComponent
    },
    {
        path:'create-time-table-page',
        component: CreateTimetablePageComponent
    },
    {
        path:'confirm-time-table-page',
        component: ConfirmTimetablePageComponent 
    }
];
