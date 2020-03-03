import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // messageService must be public? 
  // Ref.: https://angular.io/tutorial/toh-pt4#display-the-message-from-heroservice
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

}
