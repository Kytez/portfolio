import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {

  http = inject(HttpClient);

  placeholderName = 'Your name';
  nameIsFocused = false;
  placeholderEmail = 'Your email';
  emailIsFocused = false;
  placeholderMessage = 'Your message';
  messageIsFocused = false;

  contactData = {
    name: '',
    email: '',
    message: '',
    privacyPolicy: false
  };

  mailTest = true;

  post = {
    endPoint: 'https://marcel-luwinski.dev/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }

  toggleCheckbox() {
    this.contactData.privacyPolicy = !this.contactData.privacyPolicy;
  }

  nameOnFocus() {
    this.nameIsFocused = true;
  }

  nameOnBlur() {
    this.nameIsFocused = false;
  }

  emailOnFocus() {
    this.emailIsFocused = true;
  }

  emailOnBlur() {
    this.emailIsFocused = false;
  }

  messageOnFocus() {
    this.messageIsFocused = true;
  }

  messageOnBlur() {
    this.messageIsFocused = false;
  }

}


