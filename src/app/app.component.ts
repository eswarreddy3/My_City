import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { TranslationService } from './translation.service';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDropdownOpen = false;

  constructor(private translationService: TranslationService,
     @Inject(DOCUMENT) private document: Document,
      private cdr: ChangeDetectorRef) {}

  showScrollButton = false;

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showScrollButton = scrollPosition > 100;
    this.cdr.detectChanges(); // Manually trigger change detection
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    if (this.isDropdownOpen) {
      this.isDropdownOpen = false;
    }
  }

  // Listen for clicks on the document
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    
    // Close the dropdown if the click is outside the dropdown menu
    if (!target.closest('.dropdown') && this.isDropdownOpen) {
      this.isDropdownOpen = false;
    }
  }

  setLanguage(lang: string) {
    this.translationService.setLanguage(lang); // Ensure setLanguage is correctly called
    // Optionally, you can update translations here or wherever needed in your app
  }
}