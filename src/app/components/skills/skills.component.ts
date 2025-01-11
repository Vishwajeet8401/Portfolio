import { CommonModule } from '@angular/common';
import { Component, HostListener, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';


@Component({
  selector: 'app-skills',
  imports: [CommonModule,CarouselModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  responsiveOptions: any[] | undefined;
  icons = [
    { src: 'https://simpleicons.org/icons/mysql.svg', alt: 'Mysql' },
    { src: 'https://simpleicons.org/icons/postgresql.svg', alt: 'Postgresql' },
    { src: 'https://simpleicons.org/icons/firebase.svg', alt: 'Firebase' },
    { src: 'https://simpleicons.org/icons/postman.svg', alt: 'Postman' },
    { src: 'https://simpleicons.org/icons/json.svg', alt: 'Json' },
    { src: 'https://simpleicons.org/icons/github.svg', alt: 'Github' },
    { src: 'https://simpleicons.org/icons/git.svg', alt: 'Git' },
    { src: 'https://simpleicons.org/icons/apachemaven.svg', alt: 'Apachemaven' },
    { src: 'https://simpleicons.org/icons/jenkins.svg', alt: 'Jenkins' },
    { src: 'https://simpleicons.org/icons/docker.svg', alt: 'Docker' },
    { src: 'https://simpleicons.org/icons/kubernetes.svg', alt: 'Kubernetes' },
    { src: 'https://simpleicons.org/icons/linux.svg', alt: 'Linux' }
  ];
  technologies=['Html','CSS','Java','JavaScript(Js)','Angular','Spring-Boot','React','Boostrap','Mysql','Postgresql','Firebase','Json','Jenkins','Docker' ,'Kubernetes']
  private startX = 0;
  private currentTranslate = 0;
  private previousTranslate = 0;
  private activeIndex = 0;

  items = [
    { title: 'Item 1', description: 'Description for item 1' },
    { title: 'Item 2', description: 'Description for item 2' },
    { title: 'Item 3', description: 'Description for item 3' }
  ];
  // Handle touch start event
  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
  }

  // Handle touch move event
  onTouchMove(event: TouchEvent) {
    const currentX = event.touches[0].clientX;
    const deltaX = currentX - this.startX;
    const container = document.querySelector('.carousel-container') as HTMLElement;

    container.style.transition = 'none';  // Disable transition while dragging
    this.currentTranslate = this.previousTranslate + deltaX;
    container.style.transform = `translateX(${this.currentTranslate}px)`;
  }

  // Handle touch end event
  onTouchEnd() {
    const container = document.querySelector('.carousel-container') as HTMLElement;
    const containerWidth = container.offsetWidth;
    const threshold = containerWidth / 4;  // Determine how far you must swipe to change slides

    if (Math.abs(this.currentTranslate - this.previousTranslate) > threshold) {
      if (this.currentTranslate < this.previousTranslate) {
        this.activeIndex = Math.min(this.activeIndex + 1, this.items.length - 1);  // Swipe right
      } else {
        this.activeIndex = Math.max(this.activeIndex - 1, 0);  // Swipe left
      }
    }

    this.snapToIndex(container);
  }

  // Navigate to the previous item
  scrollLeft() {
    const container = document.querySelector('.carousel-container') as HTMLElement;
    this.activeIndex = Math.max(this.activeIndex - 1, 0);
    this.snapToIndex(container);
  }

  // Navigate to the next item
  scrollRight() {
    const container = document.querySelector('.carousel-container') as HTMLElement;
    this.activeIndex = Math.min(this.activeIndex + 1, this.items.length - 1);
    this.snapToIndex(container);
  }

  // Snap the carousel to the active index
  private snapToIndex(container: HTMLElement) {
    const containerWidth = container.offsetWidth;
    this.previousTranslate = -this.activeIndex * containerWidth;
    container.style.transition = 'transform 0.3s ease-out';  // Apply smooth transition
    container.style.transform = `translateX(${this.previousTranslate}px)`;
  }
}
