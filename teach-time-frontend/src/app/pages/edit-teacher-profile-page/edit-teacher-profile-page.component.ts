import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "../../common/nav-bar/nav-bar.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LogInPageComponent } from '../log-in-page/log-in-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-teacher-profile-page',
  standalone: true,
  imports: [NavBarComponent,LogInPageComponent,FormsModule,CommonModule,HttpClientModule],
  templateUrl: './edit-teacher-profile-page.component.html',
  styleUrl: './edit-teacher-profile-page.component.css'
})
export class EditTeacherProfilePageComponent implements OnInit{

  user = {
    teacherId: null,
    teacherName: '',         
    schoolName: '',          
    subject: '',             
    email: '',               
    contactNumber: '',       
    userName: '',            
    password: '',            
  };

  constructor(private router: Router,private http: HttpClient) {}

  ngOnInit(): void {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      this.user = JSON.parse(storedUser); // Parse the stored user data
    } else {
      alert('No user logged in!');
    }
  }

  saveProfile() {
    console.log('Updating profile for:', this.user);

    // Send the updated user data to the backend
    this.http
      .put('http://localhost:8080/teacher/update-teacher', this.user)
      .subscribe(
        (response) => {
          console.log('Profile updated successfully:', response);

          // Update local storage with the modified user data
          localStorage.setItem('loggedInUser', JSON.stringify(this.user));

          // Show success feedback
          alert('Profile updated successfully!');

          this.router.navigate(['home-page']);

        },
        (error) => {
          console.error('Error updating profile:', error);

          // Show error feedback
          alert('Failed to update profile. Please try again later.');
        }
      );
  }

}
