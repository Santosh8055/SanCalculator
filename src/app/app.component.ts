import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SanCalculator';

  isAuthenticated: boolean;
  constructor() {
    this.isAuthenticated = false;
  }
  ngOnInit() {}
  login() {
    this.isAuthenticated = true;
  }
  logout() {
    this.isAuthenticated = false;
  }
}
