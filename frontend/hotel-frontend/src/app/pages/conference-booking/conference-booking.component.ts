import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-conference-booking',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './conference-booking.component.html',
  styleUrl: './conference-booking.component.scss'
})
export class ConferenceBookingComponent {

}
