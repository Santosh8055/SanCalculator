import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SanCalculator';

  isAuthenticated: boolean;
  constructor(public afAuth: AngularFireAuth) {
    this.isAuthenticated = false;
  }
  ngOnInit() {}
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
    this.isAuthenticated = false;
  }
}
