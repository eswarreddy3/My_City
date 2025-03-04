import { Inject, Injectable, LOCALE_ID } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private currentLang: string = 'en'; // Default language

  setLanguage(lang: string): void {
    this.currentLang = lang;
  }

  // Method to fetch translation based on key and current language
  getTranslation(key: string): string {
    // Implement logic to return translated text based on this.currentLang and key
    if (this.currentLang === 'te') {
      switch (key) {
        case 'title':
          return 'నా నగరం - చిలకలూరిపేట';
        case 'subtitle':
          return 'పౌరులకు అనుకూలమైన పోర్టల్';
        default:
          return '';
      }
    } else {
      // Default to English
      switch (key) {
        case 'title':
          return 'My City - Chilakaluripet';
        case 'subtitle':
          return 'Citizen friendly portal';
        default:
          return '';
      }
    }
  }
}