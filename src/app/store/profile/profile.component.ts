import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

class Profile {
  firstName: string;
  lastName: string;
  address: string;
  constructor(firstName: string, lastName: string, address: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
  }
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile = new Profile('', '', '');
  constructor(private profileService: ProfileService) {}
  ngOnInit(): void {
    this.getProfile();
  }
  getProfile() {
    this.profileService.getProfile().subscribe((res) => {
      if (res.status === 'success') {
        this.profile.firstName = res.data.profile.firstName;
        this.profile.lastName = res.data.profile.lastName;
        this.profile.address = res.data.profile.address;
      }
    });
  }
  onSubmit() {
    this.profileService
      .updateProfile(
        this.profile.firstName,
        this.profile.lastName,
        this.profile.address
      )
      .subscribe((res) => {
        // TODO
        if (res.status === 'success') {
          alert('Saved');
          this.getProfile();
        } else if (res.status === 'fail') {
          console.error(res);
        } else {
          console.error(res);
        }
      });
  }
}
