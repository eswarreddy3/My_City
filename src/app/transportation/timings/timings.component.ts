import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


interface BusData {
  source: string;
  destination: string;
  timings: string[];
}

@Component({
  selector: 'app-timings',
  templateUrl: './timings.component.html',
  styleUrls: ['./timings.component.css']
})
export class TimingsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: BusData) {}

  ngOnInit(): void {
  }

}
