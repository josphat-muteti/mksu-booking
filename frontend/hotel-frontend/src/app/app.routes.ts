import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConferenceBookingComponent } from './pages/conference-booking/conference-booking.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'conference-booking', component: ConferenceBookingComponent },
	{ path: 'rooms', component: RoomsComponent },
	{ path: 'restaurant', component: RestaurantComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'contact', component: ContactComponent },
];
