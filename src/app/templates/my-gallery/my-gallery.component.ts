import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { NgxGalleryImage } from '@kolkov/ngx-gallery';
import { NgxGalleryAnimation } from '@kolkov/ngx-gallery';
import { ServiceLanguageService } from '../../services/service-language.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-my-gallery',
  templateUrl: './my-gallery.component.html',
  styleUrls: ['./my-gallery.component.scss'],
  animations: [ trigger('fadeIn', [
    transition(':enter', [
      style({opacity: 0}),
      animate('450ms', style({opacity:1}) )
    ])
  ]) ]
})
export class MyGalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  
  changeLanguage:boolean;

  constructor(private servicelanguageservice:ServiceLanguageService) { }

  ngOnInit() {
    this.servicelanguageservice.changeLanguage.subscribe(c => {
      this.changeLanguage = c;      
    })
    this.galleryOptions = [
      {
        width: (((window.screen.width)>=200) && ((window.screen.width)<320)) ? (window.screen.width*.8)+'px' : (((window.screen.width)>=320) && ((window.screen.width)<768)) ? (window.screen.width*.9)+'px': (((window.screen.width)>=768) && ((window.screen.width)<1200)) ? (window.screen.width*.9)+'px' : (((window.screen.width)>=1200) && ((window.screen.width)<1600)) ? (window.screen.width*.9)+'px' : (window.screen.width*.95)+'px',
        height: (((window.screen.width)>=200) && ((window.screen.width)<320)) ? (window.screen.height*.8)+'px' : (((window.screen.width)>=320) && ((window.screen.width)<768)) ? (window.screen.height*.9)+'px': (((window.screen.width)>=768) && ((window.screen.width)<1200)) ? (window.screen.height*.9)+'px' : (((window.screen.width)>=1200) && ((window.screen.width)<1600)) ? (window.screen.height*.9)+'px' : (window.screen.height*.95)+'px',
        //width: (window.screen.width*.9)+'px',
        //height:(window.screen.height*.8)+'px',
        thumbnailsColumns: 4,
        arrowPrevIcon: 'fa fa-chevron-left',
        arrowNextIcon: 'fa fa-chevron-right',
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'https://lh3.googleusercontent.com/FUcdfc6yRd4sWxtzzuFLclxV2HmSqQIw3kH0ftoWqXfaibQMiqeQHqMzFjJrmtZbfXDs2BUDG9iNWYIX0mAyZD9E0L6xqFFBri34LvOwFaqrl8kdpvgdC-4vjU0gSaIiLhw8qlcGjg=w2400',
        medium: 'https://lh3.googleusercontent.com/FUcdfc6yRd4sWxtzzuFLclxV2HmSqQIw3kH0ftoWqXfaibQMiqeQHqMzFjJrmtZbfXDs2BUDG9iNWYIX0mAyZD9E0L6xqFFBri34LvOwFaqrl8kdpvgdC-4vjU0gSaIiLhw8qlcGjg=w2400',
        big: 'https://lh3.googleusercontent.com/FUcdfc6yRd4sWxtzzuFLclxV2HmSqQIw3kH0ftoWqXfaibQMiqeQHqMzFjJrmtZbfXDs2BUDG9iNWYIX0mAyZD9E0L6xqFFBri34LvOwFaqrl8kdpvgdC-4vjU0gSaIiLhw8qlcGjg=w2400'
      },
      {
        small: 'https://preview.ibb.co/jrsA6R/img12.jpg',
        medium: 'https://preview.ibb.co/jrsA6R/img12.jpg',
        big: 'https://preview.ibb.co/jrsA6R/img12.jpg'
      },
      {
        small: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
        medium: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
        big: 'https://preview.ibb.co/kPE1D6/clouds.jpg'
      },
      {
        small: 'https://preview.ibb.co/mwsA6R/img7.jpg',
        medium: 'https://preview.ibb.co/mwsA6R/img7.jpg',
        big: 'https://preview.ibb.co/mwsA6R/img7.jpg'
      }, {
        small: 'https://preview.ibb.co/kZGsLm/img8.jpg',
        medium: 'https://preview.ibb.co/kZGsLm/img8.jpg',
        big: 'https://preview.ibb.co/kZGsLm/img8.jpg'
      },
    ];
  }

}

