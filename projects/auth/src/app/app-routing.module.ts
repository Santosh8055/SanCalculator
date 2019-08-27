import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { EditComponent } from './edit/edit.component';
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent, canActivate: [OktaAuthGuard] },
  { path: 'profile', component: ProfileComponent },
  { path: 'edit/:id', component: EditComponent },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
