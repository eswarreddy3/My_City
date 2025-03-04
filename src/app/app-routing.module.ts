import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MunicipalComponent } from './municipal/municipal.component';
import { PublicSafetyComponent } from './public-safety/public-safety.component';
import { EducationComponent } from './education/education.component';
import { HealthComponent } from './health/health.component';
import { RecreationComponent } from './recreation/recreation.component';
import { RevenueComponent } from './revenue/revenue.component';
import { TransportationComponent } from './transportation/transportation.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'municipal', component: MunicipalComponent },
  { path: 'safety', component: PublicSafetyComponent },
  { path: 'education', component: EducationComponent },
  { path: 'health', component: HealthComponent },
  { path: 'recreation', component: RecreationComponent },
  { path: 'revenue', component: RevenueComponent },
  { path: 'transportation', component: TransportationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
