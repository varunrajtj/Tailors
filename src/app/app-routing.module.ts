import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyStartComponent } from './templates/my-start/my-start.component';
import { MyContactComponent } from './templates/my-contact/my-contact.component';
import { MyServiceComponent } from './templates/my-service/my-service.component';
import { MyGalleryComponent } from './templates/my-gallery/my-gallery.component';


const routes: Routes = [
    { path: '', redirectTo: '/start', pathMatch: 'full'} ,
    { path: 'start', component: MyStartComponent}, 
    { path: 'contact', component: MyContactComponent },
    { path: 'service', component: MyServiceComponent },
    { path: 'gallery', component: MyGalleryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
