import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css']
})
export class RevenueComponent implements OnInit {

  services = [
    { name: 'Municipal Services', angle: 0 },
    { name: 'Revenue Services', angle: 45 },
    { name: 'Public Safety', angle: 90 },
    { name: 'Transportation and Roads', angle: 135 },
    { name: 'Health and Medical', angle: 180 },
    { name: 'Education and Libraries', angle: 225 },
    { name: 'Physical & Mental Fitness', angle: 270 }
  ];
  currentAngle = 0;

  rotateWheel() {
    this.currentAngle = (this.currentAngle + 45) % 360;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
