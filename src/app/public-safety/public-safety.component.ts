import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-safety',
  templateUrl: './public-safety.component.html',
  styleUrls: ['./public-safety.component.css']
})
export class PublicSafetyComponent implements OnInit {

  safetyNews: string = 'The city has introduced new smart cameras and drones for better monitoring and rapid response to incidents across both rural and urban areas.';

  emergencyNumbers = [
    { id: 1, name: 'EMRI', phone: '108' },
    { id: 2, name: 'Police', phone: '112' },
    { id: 3, name: 'Fire', phone: '101' },
    { id: 4, name: 'Crime Stopper', phone: '1090' },
    { id: 5, name: 'Crime Against Women and Children', phone: '1091' },
    { id: 6, name: 'Traffic Help', phone: '1073' },
    { id: 7, name: 'Electricity Complaint', phone: '155333' },
    { id: 8, name: 'Water Supply', phone: '155313' },
    { id: 9, name: 'Railway Enquiry', phone: '131/135' },
    { id: 10, name: 'Railway Reservation', phone: '139' },
    { id: 11, name: 'Free Service Ambulance', phone: '102' },
    { id: 12, name: 'Govt General Hospital, Vijayawada', phone: '0866-2452244/2452844' },
    { id: 13, name: 'King George Hospital, Vizag', phone: '2564891' },
    { id: 14, name: 'ESI Hospital, Vijayawada', phone: '0866 245 0279' },
    { id: 15, name: 'ESI Hospital, Vizag', phone: '2577195' },
    { id: 16, name: 'Collectorate, Vijayawada', phone: '0866-2478090/2576217' },
    { id: 17, name: 'Collectorate, Visakhapatnam', phone: '0891-2563121' },
    { id: 18, name: 'Govt General Hospital, Kurnool', phone: '08518-255102/255160' },
    { id: 19, name: 'Collectorate, Kurnool', phone: '08518-220396/221914' },
    { id: 20, name: 'SVIMS, Tirupthi', phone: '0877-2287777' },
    { id: 21, name: 'Collectorate, Chittor', phone: '08572-241200' },
    { id: 22, name: 'Arogyasri', phone: '104' },
    { id: 23, name: 'Voter Enrolment', phone: '1950' },
    { id: 24, name: 'BSNL', phone: '198' },
    { id: 25, name: 'Women’s Helpline', phone: '181' }  // Added this entry for completion
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  viewApprovedFIR() {
    // Implement your logic here
    console.log('View Approved FIR');
  }

  caseStatusCheckNew() {
    // Implement your logic here
    console.log('Check New Case Status');
  }
}
