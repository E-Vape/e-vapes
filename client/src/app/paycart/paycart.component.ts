import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-paycart',
  templateUrl: './paycart.component.html',
  styleUrls: ['./paycart.component.css']
})
export class PaycartComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  sendEmail () {
    this.authService.sendMail().subscribe();
    console.log('The email was sent correctly')
    }
}
