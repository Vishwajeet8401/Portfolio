import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { CertificatesComponent } from "./components/certificates/certificates.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ExperiencesComponent } from "./components/experiences/experiences.component";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { AnimateOnScroll, AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-root',
  imports: [  AnimateOnScrollModule,AnimateOnScroll,NavBarComponent, HomeComponent, AboutMeComponent, SkillsComponent, CertificatesComponent, ProjectsComponent, ExperiencesComponent, ContactUsComponent],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
})
export class AppComponent implements OnInit {
  isSticky: boolean = false;
  isNavbarVisible: boolean = true;
  private timer: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const snapContainer = document.getElementById('snap-container');
      const navbar = document.getElementById('navbar');

      // Scroll Event Listener
      if (snapContainer) {
        snapContainer.addEventListener('scroll', () => this.onScroll(snapContainer));
      }

      // Observer Logic for Sticky Navbar
      if (navbar) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            this.isSticky = !entry.isIntersecting;
            console.log(this.isSticky);
          },
          { threshold: [1.0] }
        );
        observer.observe(navbar);
      }
    }
  }


  onScroll(container: HTMLElement) {
    const scrollPosition = container.scrollTop;

    if (scrollPosition === 0) {
      this.isNavbarVisible = true; // Show navbar at the top
      this.clearHideTimer();
    } else {
      this.showNavbar();
      this.resetHideTimer();
    }
  }

  private showNavbar() {
    this.isNavbarVisible = true;
  }

  private hideNavbar() {
    this.isNavbarVisible = false;
  }

  private resetHideTimer() {
    this.clearHideTimer();
    this.timer = setTimeout(() => this.hideNavbar(), 3000); 
  }

  private clearHideTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

}
