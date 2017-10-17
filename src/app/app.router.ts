import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { BonusComponent } from './bonus/bonus.component';
import { GuideComponent } from './guide/guide.component';
import { ContactComponent } from './contact/contact.component';

export const router: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full'},
  { path: 'start', component: StartComponent},
  { path: 'bonus', component: BonusComponent},
  { path: 'guide', component: GuideComponent},
  { path: 'contact', component: ContactComponent},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
