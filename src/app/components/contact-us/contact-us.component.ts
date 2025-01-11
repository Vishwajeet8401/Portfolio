import { CommonModule } from '@angular/common';
import { Component, HostListener, Output } from '@angular/core';
import { HammerModule } from '@angular/platform-browser';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-contact-us',
  imports: [ CarouselModule,CommonModule,HammerModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  customOptions = {
    loop: true,
    items: 1,
    dots: true,
    touchDrag: true,
    mouseDrag: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  };

  slides = [
    { type: 'info', title: 'Info Slide', description: 'This is an informational slide.' },
    { type: 'form', title: 'Form Slide', formId: 123, fields: ['Name', 'Email'] }
  ];

  trackByFn(index: number, slide: any): string {
    return `${slide.type}-${index}`;
  }
}