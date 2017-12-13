import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { AuthService } from '../../services/auth.service';

 @Component({
   selector: 'app-chat',
   templateUrl: './chat.component.html',
   styleUrls: ['./chat.component.css']
 })
 export class ChatComponent implements OnInit {

   constructor( private chat: ChatService, private authService: AuthService) { }

   ngOnInit() {
   }

 }
