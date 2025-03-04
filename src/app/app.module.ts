import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider'; 
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MunicipalComponent } from './municipal/municipal.component';
import { PublicSafetyComponent } from './public-safety/public-safety.component';
import { HealthComponent } from './health/health.component';
import { EducationComponent } from './education/education.component';
import { HInfoComponent } from './health/h-info/h-info.component';
import { LanguageSelectionComponent } from './home/language-selection/language-selection.component';
import { RecreationComponent } from './recreation/recreation.component';
import { RevenueComponent } from './revenue/revenue.component';
import { TransportationComponent } from './transportation/transportation.component';
import { TimingsComponent } from './transportation/timings/timings.component';
import { ParksComponent } from './recreation/parks/parks.component';
import { TranslationService } from './translation.service';
import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import localeTe from '@angular/common/locales/te';


registerLocaleData(localeEn);
registerLocaleData(localeTe, 'te');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MunicipalComponent,
    PublicSafetyComponent,
    HealthComponent,
    EducationComponent,
    HInfoComponent,
    LanguageSelectionComponent,
    RecreationComponent,
    RevenueComponent,
    TransportationComponent,
    TimingsComponent,
    ParksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatDividerModule,
    ReactiveFormsModule, 
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatListModule,
    MatIconModule,
  ],
  providers: [TranslationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
