import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private auth: AuthService) { }

  ngOnInit() {
  }

signup (username, password){
this.auth.signup(username,password).subscribe();
}

logout() {
  this.auth.logout().subscribe();
}
}
