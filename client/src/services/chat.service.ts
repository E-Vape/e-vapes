import { Injectable, EventEmitter } from '@angular/core';
import { AuthService } from './auth.service';

 import * as io from 'socket.io-client';
 const BASE_DOMAIN = 'http://localhost:3000';

 interface Message{
   message:string;
   user:string;
 }

 @Injectable()
 export class ChatService {
   socket:any;
   messages:Array<Message> = [];
   constructor(public auth: AuthService){
     this.socket = io.connect(`${BASE_DOMAIN}`);
     this.socket.on('recibe-message', function(data:any){
       this.messages.push({
         user: data.message.split(',')[1],
         message:data.message.split(',')[0]
       })
     }.bind(this));

   }

   sendMessage(m){
     console.log(this.auth.user.username);
     this.socket.emit('send-message',{
       message:`${m},${this.auth.user.username}`
     });

     this.messages.push({
       user: 'Yo',
       message:m
     })
   }
 }
