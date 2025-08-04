
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isDarkMode = true;
  isMenuOpen = false;


  
  ngOnInit(): void {
    // On component initialization, check the user's saved theme preference or system settings.
    this.checkInitialTheme();
  }

  /**
   * Checks for a saved theme in localStorage or falls back to the system's preferred color scheme.
   */
  private checkInitialTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
    } else {
      this.isDarkMode = systemPrefersDark;
    }
    
    this.applyTheme();
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  private applyTheme(): void {
    if (this.isDarkMode) {
     
      document.documentElement.removeAttribute('data-theme');
    } else {
     
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  
  // toggleMobileMenu(): void {
  //   this.isMenuOpen = !this.isMenuOpen;
  // }
    toggleMobileMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    // Add or remove a class on the body element
    document.body.classList.toggle('menu-open', this.isMenuOpen);
  }
}
