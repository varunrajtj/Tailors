import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from "./app.component";
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, AppRoutingModule, FormsModule, NgxGalleryModule, MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, MatTabsModule, MatCardModule, MatFormFieldModule, MatInputModule, HammerModule, FlexLayoutModule, ReactiveFormsModule],
  declarations: [AppComponent, GalleryComponent, HomeComponent, ContactComponent, AboutComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
