import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent{


  constructor(private router:Router, private route:ActivatedRoute, private auth: AuthService) { }

  login(username, password) {
    this.auth.login(username, password).subscribe();
    this.router.navigate(['/products']);
  }

}
