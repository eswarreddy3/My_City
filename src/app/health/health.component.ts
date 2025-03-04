import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HInfoComponent } from './h-info/h-info.component';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  hospitals = [
    { 
      "name": "R.K. Multi Specialty Hospital",
      "address": "Opp. Narayana School, TV Car TDP Office, 1st Line, Chilakaluripet, Andhra Pradesh",
      "openHours": "Open 24 hours",
      "specialty": "Multi Specialty",
      "location": "https://maps.app.goo.gl/AfDGVJFyfHK1aPfp8"
    },
    { 
      "name": "Kandimalla Speciality Hospitals",
      "address": "6-374/6, opposite municipal office, fire station road NRT centre, Chilakaluripet, Andhra Pradesh",
      "openHours": "Open 24 hours",
      "specialty": "Specialized Hospital",
      "location": "https://maps.app.goo.gl/ceug6dA7aUutjzBM7"
    },
    { 
      "name": "Sri Krishna Hospital", 
      "address": "Addaroad Centre, near National Highway 16, Chilakaluripet, Andhra Pradesh",
      "openHours": "Open - Closes 2 pm",
      "specialty": "General",
      "location": "https://maps.app.goo.gl/HnFD6wE8x9TQpPzSA"
    },
    { 
      "name": "Srinivasa Hospital", 
      "address": "Chilakaluripet, Andhra Pradesh", 
      "openHours": "Open 24 hours",
      "specialty": "General Medicine, Emergency Care",
      "location": "https://maps.app.goo.gl/PV5ZH5PgkWoq6vLR6"
    },
    { 
      "name": "Pragathi Nursing Home", 
      "address": "Marellavari Street, near Police Station, Chilakaluripet, Andhra Pradesh", 
      "openHours": "Open 24 hours",
      "specialty": "Nursing Home",
      "location": "https://maps.app.goo.gl/YC8B1UkmYwrq9BVC8"
    },
    { 
      "name": "Ramakrishna Memorial Nursing Home", 
      "address": "Narsaraopet Rd, Chilakaluripet, Andhra Pradesh",
      "openHours": "Open 24 hours",
      "specialty": "Nursing Home",
      "location": "https://maps.app.goo.gl/PV5ZH5PgkWoq6vLR6"
    },
    { 
      "name": "Renuka Childrens Hospital", 
      "address": "35F6+VGV, Adda road centre, NH16, beside Rama Mandir, Chilakaluripet, Andhra Pradesh",
      "openHours": "Open - Closes 2 pm",
      "specialty": "Pediatrics",
      "location": "https://maps.app.goo.gl/Kn1q8DHpCJo1kZfK9"
    },
    { 
      "name": "Ramu Hospitals", 
      "address": "Chilakaluripet, Andhra Pradesh",
      "openHours": "Open 24 hours",
      "specialty": "General",
      "location": "https://maps.app.goo.gl/jkNZ1XnVzc5TjpZC9"
    },
    { 
      "name": "Dr. Lavu Sathish & Aruna Hospital",
      "address": "behind Kalamandir theatre, Chilakaluripet, Andhra Pradesh",
      "openHours": "Open - Closes 1:30 pm",
      "specialty": "General",
      "location": "https://maps.app.goo.gl/SvKQWkYExHqACUFM9"
    },
    { 
      "name": "Veera Shankar Rao Hospital",
      "address": "Chilakaluripet, Andhra Pradesh",
      "openHours": "Open 24 hours",
      "specialty": "General",
      "location": "https://maps.app.goo.gl/SBjvp8EwC2ZdMBkn9"
    },
    { 
      "name": "Sri Sathish Nursing Home",
      "address": "Chilakaluripet, Andhra Pradesh",
      "openHours": "Open 24 hours",
      "specialty": "Nursing Home",
      "location": "https://maps.app.goo.gl/D6sGJGskT5HfpQ2f6"
    },
    { 
      "name": "Krishna's Health Care Clinic",
      "address": "near Hosanna Mandir, Chilakaluripet, Andhra Pradesh",
      "openHours": "Open 24 hours",
      "specialty": "General",
      "location": "https://maps.app.goo.gl/fu5kb5W9pA2g4UxL9"
    },
    { 
      "name": "Varalakshmi Fertility and Maternity Hospital",
      "address": "State Highway 45 Venugonda, Chilakaluripet, Andhra Pradesh",
      "openHours": "Open 24 hours",
      "specialty": "Fertility and Maternity",
      "location": "https://maps.app.goo.gl/1xZwVsk7xUNPckLW9"
    },
    { 
      "name": "Jayamma Hospital",
      "address": "Venugonda, 4-176, 5th Ln, Chilakaluripet, Andhra Pradesh",
      "openHours": "Open - Closes 2 pm",
      "specialty": "General",
      "location": "https://maps.app.goo.gl/3GY2KH4Z1kWnjjhS6"
    },
    { 
      "name": "Lakshmi Pillala Hospital",
      "address": "35P7+62J, Subhani Nagar entrance, pincode-522309, Chilakaluripet, Andhra Pradesh",
      "openHours": "Open - Closes 10 pm",
      "specialty": "Pediatrics",
      "location": "https://maps.app.goo.gl/jVsHwUzFng3xkyZJ8"
    },
    { 
      "name": "Muddana Ramesh Hospital",
      "address": "35PDC+HR, Chilakaluripet, Andhra Pradesh",
      "openHours": "Open 24 hours",
      "specialty": "Multi Specialty",
      "comment": "Best Hospital and doctors with best nurses provided.",
      "location": "https://maps.app.goo.gl/i5cKP"
    },
    { 
      "name": "Ramrao Super Speciality Hospital",
      "address": "35V7+2W6, Service Rd, Chilakaluripet, Andhra Pradesh",
      "openHours": "Open 24 hours",
      "specialty": "Super Specialty",
      "comment": "They provide 24x7 emergency services.",
      "location": "https://maps.app.goo.gl/kPqjaK"
    },
    { 
      "name": "Sai Krupa Nursing Home",
      "address": "Gandhi Pet, 1st Line, Chilakaluripet, Andhra Pradesh",
      "openHours": "Open 24 hours",
      "specialty": "Nursing Home",
      "location": "https://maps.app.goo.gl/bF2ha5"
    },
    { 
      "name": "Lakshmi Multi Speciality Hospital",
      "address": "35R7+80F, Chilakaluripet, Andhra Pradesh",
      "openHours": "Open 24 hours",
      "specialty": "Multi Specialty",
      "location": "https://maps.app.goo.gl/rDqsaK"
    },
    { 
      "name": "Samata Nursing Home",
      "address": "35R9+X44, opp. Hero Honda Showroom, Chilakaluripet, Andhra Pradesh",
      "openHours": "Open - Closes 2 pm",
      "specialty": "Nursing Home",
      "comment": "My body dehydrated helping alot dr.",
      "location": "https://maps.app.goo.gl/ZZkpX"
    },
    { 
      "name": "Sri Annapurna ENT Nursing Home",
      "address": "35R8+XF6, Opp. Narayana School, Gandhi pet, Chilakaluripet, Andhra Pradesh",
      "openHours": "Open - Closes 9 pm",
      "specialty": "ENT",
      "location": "https://maps.app.goo.gl/CCz1Z"
    },
    { 
      "name": "Janaki Nursing Home",
      "address": "Chilakaluripet, Andhra Pradesh",
      "openHours": "Open 24 hours",
      "specialty": "Nursing Home",
      "location": "https://maps.app.goo.gl/HaL3Z"
    },
    { 
      "name": "Vijaya Nursing Home",
      "address": "Kalamandir Centre, Marellavari Street, Chilakaluripet, Andhra Pradesh",
      "openHours": "Open - Closes 1 pm",
      "specialty": "Nursing Home",
      "location": "https://maps.app.goo.gl/jFF9H"
    },
    { 
      "name": "Koteswar ENT & Dental Clinic",
      "address": "3509+XVG Krishnamahal Centre, Chilakaluripet, Andhra Pradesh",
      "openHours": "Open - Closes 1 am",
      "specialty": "ENT, Dental",
      "comment": "Very good treatment and friendly staff",
      "location": "https://maps.app.goo.gl/Zs9JF"
    },
    { 
      "name": "Lahiri Hospital for Women and Children",
      "address": "35P6+6V0, Chilakaluripet, Andhra Pradesh",
      "openHours": "Closes soon - 12:30 pm",
      "specialty": "Women and Children",
      "comment": "Doctor good facility werst medical bills not required.",
      "location": "https://maps.app.goo.gl/sKdJH"
    }
];

  
  bloodBanks = [
    { 
      name: 'Cpt Blood Center',
      address: '123 Main St, YourCity, YS', 
      openHours: '8 AM - 8 PM',
      services: 'Blood Donation, Plasma Collection',
      location: 'https://maps.app.goo.gl/g5obJyTLk1uvCZuRA'
    },
    { 
      name: 'Downtown Plasma Services', 
      address: '456 Center Rd, YourCity, YS', 
      openHours: '9 AM - 5 PM',
      services: 'Plasma Collection, Blood Testing',
      location: 'https://maps.app.goo.gl/examplelink2'
    }
  ];

  constructor(public dialog: MatDialog) {}

  // In health.component.ts
openDialog(data: any): void { // Generalized to accept any data type
  const dialogRef = this.dialog.open(HInfoComponent, {
    width: 'auto',
    data: { item: data } // Renamed 'hospital' to 'item' for generality
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}


  ngOnInit(): void {
  }

}
