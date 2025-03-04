import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-municipal',
  templateUrl: './municipal.component.html',
  styleUrls: ['./municipal.component.css'],
  animations: [
    trigger('dropdown', [
      state('closed', style({
        height: '0px',
        opacity: 0
      })),
      state('open', style({
        height: '*',
        opacity: 1
      })),
      transition('closed <=> open', animate('300ms ease-in-out'))
    ])
  ]
})
export class MunicipalComponent implements OnInit {

  showPropertyTax: boolean = false;
  showLandTax: boolean = false;
  showWaterCharges: boolean = false;
  showTradeLicense: boolean = false;
  showApplicationForWater: boolean = false;
  showAdvertisementTax: boolean = false;
  showMarriageRegistrations: boolean = false;
  showSewerageConnection: boolean = false;

@ViewChild('propertyTaxSection') propertyTaxSection!: ElementRef;
@ViewChild('landTaxSection') landTaxSection!: ElementRef;
@ViewChild('waterChargesSection') waterChargesSection!: ElementRef;
@ViewChild('tradeLicenseSection') tradeLicenseSection!: ElementRef;
@ViewChild('applicationForWaterSection') applicationForWaterSection!: ElementRef;
@ViewChild('advertisementTaxSection') advertisementTaxSection!: ElementRef;
@ViewChild('marriageRegistrationsSection') marriageRegistrationsSection!: ElementRef;
@ViewChild('sewerageConnectionSection') sewerageConnectionSection!: ElementRef;

togglePropertyTax() {
  this.showPropertyTax = !this.showPropertyTax;
  if (this.showPropertyTax) {
    this.showLandTax = false;
    this.showWaterCharges = false;
    this.showApplicationForWater = false;
    this.showTradeLicense = false;
    this.showAdvertisementTax = false;
    this.showSewerageConnection = false;
    setTimeout(() => this.scrollToPropertyTax(), 0);
  }
}

toggleLandTax() {
  this.showLandTax = !this.showLandTax;
  if (this.showLandTax) {
    this.showPropertyTax = false;
    this.showWaterCharges = false;
    this.showApplicationForWater = false;
    this.showTradeLicense = false;
    this.showAdvertisementTax = false;
    this.showSewerageConnection = false;
    setTimeout(() => this.landTaxSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
  }
}

toggleWaterCharges() {
  this.showWaterCharges = !this.showWaterCharges;
  if (this.showWaterCharges) {
    this.showPropertyTax = false;
    this.showLandTax = false;
    this.showApplicationForWater = false;
    this.showTradeLicense = false;
    this.showAdvertisementTax = false;
    this.showSewerageConnection = false;
    setTimeout(() => this.waterChargesSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
  }
}

toggleApplicationForWater() {
  this.showApplicationForWater = !this.showApplicationForWater;
  if (this.showApplicationForWater) {
    this.showPropertyTax = false;
    this.showLandTax = false;
    this.showWaterCharges = false;
    this.showTradeLicense = false;
    this.showAdvertisementTax = false;
    setTimeout(() => this.applicationForWaterSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
  }
}

// Toggle method for Trade Licenses
toggleTradeLicense() {
  this.showTradeLicense = !this.showTradeLicense;
  if (this.showTradeLicense) {
    this.showPropertyTax = false;
    this.showLandTax = false;
    this.showWaterCharges = false;
    this.showApplicationForWater = false;
    this.showAdvertisementTax = false;
    setTimeout(() => this.tradeLicenseSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
  }
}

// Toggle method for Advertisement Tax
toggleAdvertisementTax() {
  this.showAdvertisementTax = !this.showAdvertisementTax;
  if (this.showAdvertisementTax) {
    this.showPropertyTax = false;
    this.showLandTax = false;
    this.showWaterCharges = false;
    this.showApplicationForWater = false;
    this.showTradeLicense = false;
    setTimeout(() => this.advertisementTaxSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
  }
}

toggleMarriageRegistrations() {
  this.showMarriageRegistrations = !this.showMarriageRegistrations;
  if (this.showMarriageRegistrations) {
    this.showPropertyTax = false;
    this.showLandTax = false;
    this.showWaterCharges = false;
    this.showApplicationForWater = false;
    this.showTradeLicense = false;
    this.showAdvertisementTax = false;
    this.showSewerageConnection = false;
    setTimeout(() => this.marriageRegistrationsSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
  }
}

// Toggle method for Sewerage Connection
toggleSewerageConnection() {
  this.showSewerageConnection = !this.showSewerageConnection;
  if (this.showSewerageConnection) {
    this.showPropertyTax = false;
    this.showLandTax = false;
    this.showWaterCharges = false;
    this.showApplicationForWater = false;
    this.showTradeLicense = false;
    this.showAdvertisementTax = false;
    this.showMarriageRegistrations = false;
    setTimeout(() => this.sewerageConnectionSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
  }
}

  scrollToPropertyTax() {
    this.propertyTaxSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  constructor() { }

  ngOnInit(): void { }
  
}
