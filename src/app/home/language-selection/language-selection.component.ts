import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-language-selection',
  templateUrl: './language-selection.component.html',
  styleUrls: ['./language-selection.component.css']
})
export class LanguageSelectionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LanguageSelectionComponent>) { }

  // showPopup: boolean = true;  // Manage visibility with a flag

  ngOnInit(): void {
    // this.checkLanguagePreference();
  }

  // checkLanguagePreference(): void {
  //   if(localStorage.getItem('langSelected')) {
  //     this.showPopup = false;
  //   }
  // }

  // selectLanguage(lang: string): void {
  //   localStorage.setItem('langSelected', 'true');  // Set a flag when language is selected
  //   this.showPopup = false;  // Hide the popup
  //   // Trigger translation here if not automatically handled by Google Translate
  // }

}
