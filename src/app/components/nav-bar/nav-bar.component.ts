import { CommonModule } from '@angular/common';
import { ThemeService } from './../../services/theme.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  @Input() sticky: boolean = false;
  constructor(private themeService: ThemeService) {}
  changeTheme(theme: string): void {
    this.themeService.setTheme(theme);
  }
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleTheme() {
    document.body.classList.toggle('dark-theme');
  }
}
