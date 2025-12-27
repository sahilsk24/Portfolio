import { Component } from '@angular/core';
import{ FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // name: string = '';
  // email: string = '';
  // message: string = '';

  // onSubmit() {
  //   if (!this.name || !this.email || !this.message) {
  //     alert('Please fill in all fields.');
  //     return;
  //   }

  //   const mailtoLink = `mailto:your-email@example.com?subject=Message from ${encodeURIComponent(this.name)}&body=${encodeURIComponent(
  //     `Name: ${this.name}\nEmail: ${this.email}\n\nMessage:\n${this.message}`
  //   )}`;

  //   // Open the mail client
  //   window.location.href = mailtoLink;

  //   // Optionally reset form
  //   this.name = '';
  //   this.email = '';
  //   this.message = '';
  // }

  name: string = '';
email: string = '';
message: string = '';

onSubmit(form: any) {
  if (form.invalid) {
    alert('Please fill in all fields.');
    return;
  }

  // Let Netlify handle submission
  alert('Message sent successfully!');

  // Reset form
  form.resetForm();
}

}
