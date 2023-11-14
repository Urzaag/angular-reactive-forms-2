import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './user';
import { Address } from './address';
import { passwordValidator } from './password-validator';
import { emailValidator } from './email-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-reactiveForms-2';

  userForm!: FormGroup;

  user!: User;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
      this.userForm = this.fb.group({
        credentials: this.fb.group({
          name: ['Dr', [Validators.required, Validators.minLength(4)]],
          email: ['test@test.test', [Validators.required, emailValidator]],
          password: ['test1234', [Validators.required, passwordValidator]],
        }),
        address: this.fb.group({
          street: ['La rivière'],
          zip: ['24120'],
          city: ['Coly']})
    });
  }

  onSubmit() {
    this.user = this.userForm.value;
    console.log(this.user);
  }
}
