import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
  profile: any;
  userId: number = 1; // Example user ID

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.http.get(`http://localhost:3000/users/${this.userId}/profile`).subscribe(
      (data) => (this.profile = data),
      (error) => console.error('Error fetching profile', error)
    );
  }

  updateProfile() {
    const profileData = { fullName: 'John Doe', bio: 'Developer' };
    this.http.put(`http://localhost:3000/users/${this.userId}/profile`, profileData).subscribe(
      (data) => {
        console.log('Profile updated', data);
        this.loadProfile();
      },
      (error) => console.error('Error updating profile', error)
    );
  }
}
