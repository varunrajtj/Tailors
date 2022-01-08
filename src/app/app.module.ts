import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http' ;
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ServiceMailService } from './services/service-mail.service';

import { MyStartComponent } from './templates/my-start/my-start.component';
import { MyContactComponent } from './templates/my-contact/my-contact.component';
import { MyServiceComponent } from './templates/my-service/my-service.component';
import { MyGalleryComponent } from './templates/my-gallery/my-gallery.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';


import { MyHeaderComponent } from './allways/my-header/my-header.component';
import { MyFooterComponent } from './allways/my-footer/my-footer.component';
import { MarkAsteriskDirective } from './directives/directives/mark-asterisk.directive';


@NgModule({
  declarations: [
    AppComponent,
    MyStartComponent,
    MyContactComponent,
    MyHeaderComponent,
    MyFooterComponent,
    MyServiceComponent,
    MyGalleryComponent,
    MarkAsteriskDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    BrowserModule,
    BrowserAnimationsModule,
    NgxGalleryModule,
    ModalModule.forRoot(),
    PopoverModule.forRoot() 
  ],
  providers: [ServiceMailService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
