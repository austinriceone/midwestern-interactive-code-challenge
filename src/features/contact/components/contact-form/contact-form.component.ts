import {Component, OnInit} from '@angular/core';
import {ContactService} from "../../services/contact.service";
import {FormBuilder, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm = this.formBuilder.group({
    firstName: this.formBuilder.control(''),
    lastName: this.formBuilder.control(''),
    title: this.formBuilder.control(''),
    email: this.formBuilder.control('', [Validators.required, Validators.email]),
    message: this.formBuilder.control(''),
  });

  thankYou = false;

  constructor(private contactService: ContactService,
              private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  get emailRequiredCheck() {
    return this.contactForm.get('email')?.dirty && this.contactForm.get('email')?.errors?.['required'];
  }

  sendContactInfo() {
    if (!this.contactForm.valid) {
      if (!this.contactForm.get('email')?.dirty) {
        this.contactForm.get('email')?.markAsDirty();
        this.contactForm.updateValueAndValidity();
      }
      this.toastr.error('Please enter a valid email before submitting!');
      return;
    }

    this.contactService.sendContactInfo(this.contactForm.getRawValue()).subscribe(() => {
      this.toastr.success('Thanks for reaching out! We\'ll get back to you shortly.');
      this.thankYou = true;
    });
  }
}
