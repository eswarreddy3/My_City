import { Component, OnInit } from '@angular/core';

interface School {
  name: string;
  location: string;
  contact: string; // Assuming a string format for simplicity; update as necessary.
}

interface College {
  name: string;
  location: string;
  contact: string; // Assuming a string format for simplicity; update as necessary.
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  displayedColumns: string[] = ['name', 'location', 'contact'];
  govtSchools: School[] = [];
  privateSchools: School[] = [];
  govtCollege: College[] = [];
  privateCollege: College[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadSchoolData();
    this.loadCollegeData();
  }

  loadSchoolData() {
    this.govtSchools = [
      { name: "Sarada Zilla Parishad High School", location: "Chilakaluripet", contact: "URL1" },
      { name: "Sri Sadineni Chowdaraiah Public School", location: "Venugonda, Chilakaluripet", contact: "URL2" },
      // More entries can be added here
    ];

    this.privateSchools = [
      { name: "Sri Sadineni Chowdaraiah Public School", location: "Venugonda, Chilakaluripet", contact: "URL2" },
      // More entries can be added here
    ];
  }

  loadCollegeData() {
    this.govtCollege = [
      { name: "Sarada Zilla Parishad College", location: "Chilakaluripet", contact: "URL1" },
      { name: "Sri Sadineni Chowdaraiah College", location: "Venugonda, Chilakaluripet", contact: "URL2" },
      // More entries can be added here
    ];

    this.privateCollege = [
      { name: "Sri Sadineni Chowdaraiah College", location: "Venugonda, Chilakaluripet", contact: "URL2" },
      // More entries can be added here
    ];
  }
}