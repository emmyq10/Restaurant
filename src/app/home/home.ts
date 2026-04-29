import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {

  constructor(private ngZone: NgZone) {}
  private timerSubscription?: Subscription

  slides = [
    { image: 'imgs/hero1.jpg' },
    { image: 'imgs/hero2.jpg' },
    { image: 'imgs/hero3.jpg' }
  ];

  currentIndex = 0;
  intervalId!: ReturnType <typeof setInterval>;

  ngOnInit() {
   this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    this.timerSubscription?.unsubscribe();
  }

  startAutoSlide() {
    this.timerSubscription = timer(5000,5000).subscribe(() =>{
      this.slides[this.currentIndex]
      this.slides.forEach(i => i.image);
      console.log(this.slides[this.currentIndex])
    })
   
  }

  nextSlide() {
    console.log('Sliding...', this.currentIndex);
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  // This is the nav bar Ts file

  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
