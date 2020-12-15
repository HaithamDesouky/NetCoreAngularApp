import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Message } from 'src/app/_models/message';
import { MessageService } from 'src/app/_services/message.service';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.scss'],
})
export class MemberMessagesComponent implements OnInit {
  @ViewChild('messageForm') messageForm: NgForm;
  @Input() messages: Message[];
  @Input() username: string;
  messageContent: string;

  constructor(
    private messageService: MessageService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  sendMessage() {
    console.log(this.messageContent);
    this.messageService
      .sendMessage(this.username, this.messageContent)
      .subscribe((message) => {
        this.messages.push(message);
        this.messageForm.reset;
        this.toastr.success(
          'Messages successfuly sent to ' +
            this.username.charAt(0).toUpperCase() +
            this.username.slice(1)
        );
      });
  }
}
