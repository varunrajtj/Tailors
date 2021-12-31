import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { NgxGalleryImage } from '@kolkov/ngx-gallery';
import { NgxGalleryAnimation } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
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

