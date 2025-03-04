import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  profiles = [
    {
      name: 'Sri Prathipati Pulla Rao',
      role: 'MLA - Chilakaluripet',
      imgUrl: 'assets/MLA.jpg',
    },
    {
      name: 'Sri Lavu Srikrishna Devarayalu',
      role: 'Member of Parliament - Narsaraopet',
      imgUrl: 'assets/MP.jpg',
    },
    {
      name: 'Sri Marri Rajashekar',
      role: 'MLC',
      imgUrl: 'assets/MLC.jpg',
    }
  ];


  newsItems = [
    { date: 'Aug 27', year: '2024', title: 'TTD Gokulashtami Asthanam today', url: 'https://www.newindianexpress.com/states/andhra-pradesh/2024/Aug/27/ttd-gokulashtami-asthanam-today' },
    { date: 'Aug 27', year: '2024', title: 'Oberoi Group plans to transform Pitchuka Lanka into tourism hub', url: 'https://www.newindianexpress.com/states/andhra-pradesh/2024/Aug/27/oberoi-group-plans-to-transform-pitchuka-lanka-into-tourism-hub' },
    { date: 'Aug 27', year: '2024', title: 'TTD Gokulashtami Asthanam today', url: 'https://www.newindianexpress.com/states/andhra-pradesh/2024/Aug/27/ttd-gokulashtami-asthanam-today' },
    { date: 'Aug 27', year: '2024', title: 'Oberoi Group plans to transform Pitchuka Lanka into tourism hub', url: 'https://www.newindianexpress.com/states/andhra-pradesh/2024/Aug/27/oberoi-group-plans-to-transform-pitchuka-lanka-into-tourism-hub' },
    // Add more news items here
  ];

  constructor() { }

  images: string[] = [
    'assets/CPT.jpg',
    'assets/CPT2.jpg',
    'assets/CPT3.png',
    'assets/CPT4.png',
    'assets/CPT5.png',
    'assets/CPT6.png'
  ];



  currentImageIndex: number = 0;
  currentImage: string = this.images[this.currentImageIndex];
  intervalId: any;

  ngOnInit(): void {
    this.startCarousel();
  }

  ngOnDestroy(): void {
    this.stopCarousel();
  }

  startCarousel(): void {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 2000);
  }

  stopCarousel(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.currentImage = this.images[this.currentImageIndex];
  }
}
