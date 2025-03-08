import { Routes } from '@angular/router';

export const routes: Routes = [
	{path: '', component: HomeComponent },
	{path: 'conference', component: ConferenceBookingComponent },
	{path: 'rooms', component: RoomsBookingComponent },
	{path: 'about', component: AboutComponent },
	{path: 'contact', component: ContactComponent },
];
