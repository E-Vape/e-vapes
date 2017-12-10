import { Component } from '@angular/core';
import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-vapes';
  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout().subscribe();
  }
}
