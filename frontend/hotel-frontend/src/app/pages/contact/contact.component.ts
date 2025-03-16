import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
	name = '';
	email = '';
	subject = '';
	message = '';
	loading = false;
	successMessage = '';

	sendMessage(event: Event) {
		event.preventDefault(); //prevents page refresh
		this.loading = true;
		this.successMessage = '';

		/*Simulate sending process (replace with actual API call later) */
		setTimeout(() => {
			this.loading =false;
			this.successMessage = 'Message sent successfully!';
			this.clearForm();
		}, 2000);
	}

	clearForm() {
		this.name = '';
		this.email = '';
		this.subject = '';
		this.message = '';
	}
}
