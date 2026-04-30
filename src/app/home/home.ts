import { Component, OnInit, OnDestroy, signal, input } from '@angular/core';
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

  
  slides = input<string[]>(['imgs/hero1.jpg', 'imgs/hero2.jpg', 'imgs/hero3.jpg']);
  private timerSubscription?: Subscription
  currentIndex = signal<number>(0);



  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.timerSubscription?.unsubscribe();
  }

  startAutoSlide() {
    this.timerSubscription = timer(3000,3000).subscribe(() =>{
      this.nextSlide();
    })
   
  }

  nextSlide() {
    const currentIndex = (this.currentIndex() + 1) % this.slides().length;
    this.currentIndex.set(currentIndex);
  }

  prevSlide() {
    const currentIndex = (this.currentIndex() - 1 + this.slides().length) % this.slides().length;
    this.currentIndex.set(currentIndex);
    this.resetSlides();
  }

  resetSlides(): void {
    this.timerSubscription?.unsubscribe();
    this.startAutoSlide();
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
