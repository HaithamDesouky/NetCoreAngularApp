import { HttpClient } from '@angular/common/http';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';
import { BusyService } from './_services/busy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'BandFinder';
  loggedIn = false;
  @Output() loaded = false;

  constructor(
    private accountService: AccountService,
    private busyService: BusyService
  ) {}

  model: any = {};

  ngOnInit() {
    this.setCurrentUser();
  }
  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }
}
