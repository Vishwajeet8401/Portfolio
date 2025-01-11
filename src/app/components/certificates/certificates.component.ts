import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-certificates',
  imports: [CarouselModule],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {
  constructor(){
    
    this.items = [
      { title: 'Item 1', image: 'https://stat.overdrive.in/wp-content/odgallery/2022/08/63812_2022_Honda_CB300F_DLX_PRO_1_468x263.jpg' },
      { title: 'Item 2', image: 'https://cdn.magicdecor.in/com/2024/02/08155013/The-Bike-Rider-Wallpaper-for-Wall.jpg' },
      { title: 'Item 3', image: 'https://via.placeholder.com/300x200?text=Item+3' },
      { title: 'Item 4', image: 'https://via.placeholder.com/300x200?text=Item+4' }];
  this.responsiveOptions = [
    {
      breakpoint: '1600px',
      numVisible: 4,
      numScroll: 2
  },
    {
      breakpoint: '1360px',
      numVisible: 3,
      numScroll: 2
  },
    {
        breakpoint: '1240px',
        numVisible: 3,
        numScroll: 2
    },
    {
        breakpoint: '1100px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '852px',
        numVisible: 1,
        numScroll: 1
    }
];}
   items: any[] = [];
   responsiveOptions: any[];

}
