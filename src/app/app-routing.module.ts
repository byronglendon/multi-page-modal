import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AppComponent  },
  {path: 'modal-landing-page', component: LandingComponent, outlet: 'popup' },
  {path: 'modal-landing-page/page1', component: Page1Component, outlet: 'popup' },
  {path: 'modal-landing-page/page2', component: Page2Component, outlet: 'popup' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
