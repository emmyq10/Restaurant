import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reservation.html',
  styleUrl: './reservation.css',
})
export class Reservation {
  form = {
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
  };

  makeReservation() {
    console.log(this.form);

    // API will come here later
  }
}
