import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit/edit.component';

import { OktaAuthModule } from '@okta/okta-angular';
import { ProfileComponent } from './profile/profile.component';

const config = {
  issuer: 'https://dev-221277.okta.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oa17iict3wI3XdhD357'
};

@NgModule({
  declarations: [AppComponent, SearchComponent, EditComponent, ProfileComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, OktaAuthModule.initAuth(config)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
