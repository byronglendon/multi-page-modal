import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './pages/landing/landing.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { ModalLandingComponent } from './modal.components/modal-landing/modal-landing.component';
import { ModalComponent } from './ui.components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    Page1Component,
    Page2Component,
    ModalLandingComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalLandingComponent,
  ]
})
export class AppModule { }
