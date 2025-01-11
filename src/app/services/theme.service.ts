import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private renderer: Renderer2;
  private theme: string = 'light-theme';

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  setTheme(theme: string): void {
    this.theme = theme;
    this.renderer.setAttribute(document.body, 'class', theme);
  }

  getTheme(): string {
    return this.theme;
  }
}
