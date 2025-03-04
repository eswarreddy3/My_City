import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TimingsComponent } from './timings/timings.component';

@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.css']
})
export class TransportationComponent implements OnInit {

  busStand = [
    { source: 'Chilakaluripet', destination: 'Guntur', 
      timings: [ 
        '05:00', '06:00', '06:15', '06:30', '06:45', '07:00', '07:10', '07:20', '07:30', '07:40',
        '07:50', '08:00', '08:15', '08:30', '08:45', '09:00', '09:05', '09:10', '09:20', '09:30',
        // More timings throughout the day
        '21:10', '21:25', '21:35', '21:45', '22:05', '22:15'
      ], ticketPrice: '₹150' },
    { source: 'Chilakaluripet', destination: 'Narsaraopet', timings: ['07:00', '11:00', '15:00', '19:00', '23:00'], ticketPrice: '₹100' },
    { source: 'Chilakaluripet', destination: 'Hyderabad', timings: ['05:00', '09:00', '13:00', '17:00', '21:00'], ticketPrice: '₹500' },
    { source: 'Chilakaluripet', destination: 'Tirupati', timings: ['06:00', '10:00', '14:00', '18:00', '22:00'], ticketPrice: '₹350' },
    { source: 'Chilakaluripet', destination: 'Chennai', timings: ['05:30', '09:30', '13:30', '17:30', '21:30'], ticketPrice: '₹450' },
    { source: 'Chilakaluripet', destination: 'Nellore', timings: ['04:00', '08:00', '12:00', '16:00', '20:00'], ticketPrice: '₹300' },
    { source: 'Chilakaluripet', destination: 'Rajahmundry', timings: ['05:45', '09:45', '13:45', '17:45', '21:45'], ticketPrice: '₹400' },
    { source: 'Chilakaluripet', destination: 'Chittoor', timings: ['06:15', '10:15', '14:15', '18:15', '22:15'], ticketPrice: '₹320' },
    { source: 'Chilakaluripet', destination: 'Kakinada', timings: ['07:00', '11:00', '15:00', '19:00', '23:00'], ticketPrice: '₹350' },
    { source: 'Chilakaluripet', destination: 'Bangalore', timings: ['06:30', '10:30', '14:30', '18:30', '22:30'], ticketPrice: '₹550' },
    { source: 'Chilakaluripet', destination: 'Peddapuram', timings: ['07:30', '11:30', '15:30', '19:30', '23:30'], ticketPrice: '₹380' },
    { source: 'Chilakaluripet', destination: 'Visakhapatnam', timings: ['08:00', '12:00', '16:00', '20:00', '00:00'], ticketPrice: '₹450' }
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openDialog(bus: any) {
    this.dialog.open(TimingsComponent, {
      width: 'auto',
      height: 'auto',
      data: bus  // Now passing the entire bus object
    });
  }
  

}
