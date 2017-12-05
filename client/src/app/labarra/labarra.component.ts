import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-labarra',
  templateUrl: './labarra.component.html',
  styleUrls: ['./labarra.component.css']
})
export class LabarraComponent implements OnInit {

  user:object;
  constructor(private auth:AuthService) {
    this.auth.loginEvent.subscribe( user =>{
      this.user = user;
    })
  }

  ngOnInit() {
  }

}
