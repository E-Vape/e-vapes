import { Injectable, EventEmitter } from '@angular/core';
import { AuthService } from './auth.service';
import * as io from 'socket.io-client';
import { environment } from '../environments/environment';
const DOMAIN = environment.baseurl;

 interface Message{
   message: string;
   user: string;
 }

 @Injectable()
 export class ChatService {
   socket:any;
   messages:Array<Message> = [];
   constructor(public auth: AuthService){
     this.socket = io.connect(`${DOMAIN}`);
     this.socket.on('recibe-message', function(data:any){
       this.messages.push({
         user: data.message.split(',')[1],
         message:data.message.split(',')[0]
       })
     }.bind(this));

   }

   sendMessage(m){

     let user = this.auth.user !==  null ? this.auth.user.username : 'Anonimous'

     this.socket.emit('send-message',{
       message:`${m},${user}`
     });

     this.messages.push({
       user: 'Yo',
       message:m
     })
   }
 }
