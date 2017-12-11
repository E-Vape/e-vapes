import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  constructor(private authService: AuthService) { }
  ngOnInit() {
  }
  editUserByID(id, username, password, email) {
    this.authService.editUserByID(id, username, password, email)
      .subscribe(object => console.log(object));
  }
}
