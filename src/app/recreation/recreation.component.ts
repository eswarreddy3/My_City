import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ParksComponent } from './parks/parks.component';
import { MatDialog } from '@angular/material/dialog';


export interface Park {
  name: string;
  url: string;
}

export interface Gym {
  name: string;
  url: string;
}

@Component({
  selector: 'app-recreation',
  templateUrl: './recreation.component.html',
  styleUrls: ['./recreation.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class RecreationComponent implements OnInit {

  parks: Park[] = [
    { name: 'Gandhi Park', url: 'https://maps.app.goo.gl/sbT9mGpD59xVvzpw6' },
    { name: 'CR Colony Walkers Park', url: 'https://maps.app.goo.gl/6buf6nXRsQgxQ33j8' },
    { name: 'Krishna Nagar Park', url: 'https://maps.app.goo.gl/ZVjVCM2vyKnnNHbg9' },
    { name: 'Childrens Park', url: 'https://maps.app.goo.gl/ww5bMNHdXMmBL3TB7' }
  ];

  gyms: Gym[] = [
    { name: 'Get Fit', url: 'https://maps.app.goo.gl/sbT9mGpD59xVvzpw6' },
    { name: 'Friends Gym', url: 'https://maps.app.goo.gl/6buf6nXRsQgxQ33j8' },
    { name: 'Sonic Fitness', url: 'https://maps.app.goo.gl/ZVjVCM2vyKnnNHbg9' },
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }  

  openDialog(data: any): void { // Generalized to accept any data type
    const dialogRef = this.dialog.open(ParksComponent, {
      width: 'auto',
      data: { item: data } // Renamed 'hospital' to 'item' for generality
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
