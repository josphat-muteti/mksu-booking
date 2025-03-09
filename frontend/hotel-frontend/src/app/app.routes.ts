import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConferenceBookingComponent } from './conference-booking/conference-booking.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
	{path: '', component: HomeComponent },
	{path: 'conference', component: ConferenceBookingComponent },
	{path: 'rooms', component: RoomsComponent },
	{path: 'about', component: AboutComponent },
	{path: 'contact', component: ContactComponent },
];
