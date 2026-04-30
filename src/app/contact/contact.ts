import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [ CommonModule, RouterModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  openWhatsApp() {
  const phone = '2348012345678'; // Replace with your number

  const message = 'Hello, I would like to make an inquiry about your menu.';
  const encodedMessage = encodeURIComponent(message);

  const url = `https://wa.me/${phone}?text=${encodedMessage}`;

  window.open(url, '_blank');
}
}
