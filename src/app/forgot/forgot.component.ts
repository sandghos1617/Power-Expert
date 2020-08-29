import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import { Router } from '@angular/router';

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

@Component({
    selector: 'app-forgot',
    templateUrl: './forgot.component.html',
    styleUrls: ['../registration/registration.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
    emailForm: FormGroup;
    passwordForm: FormGroup;
    showEmailForm = true;
    showPasswordForm = false;
    constructor(
        private readonly fb: FormBuilder,
        private readonly router: Router
    ) {}

    ngOnInit(): void {
        this.emailForm = this.fb.group({
            email: ['', Validators.compose([Validators.required, Validators.email, Validators.pattern(EMAIL_REGEX)])],
        });

        this.passwordForm = this.fb.group({
            password: ['', Validators.compose([Validators.required])],
            confirmPassword: ['', Validators.compose([Validators.required])],
        });

        this.passwordForm.validator = this.matchingPasswords;
    }

    matchingPasswords(AC: AbstractControl): ValidationErrors {
        if (AC.get('password') && AC.get('confirmPassword')) {
            const password = AC.get('password').value;
            const confirmPassword = AC.get('confirmPassword').value;
            if (password !== confirmPassword) {
                AC.get('confirmPassword').setErrors({ matchingPasswords: true });
            } else {
                return null;
            }
        }
    }

    sendResetEmail(): void {
        if (this.emailForm.valid) {
            /*
        HERE YOU NEED TO MAKE A CALL TO YOUR API TO SEND AN EMAIL WITH PASSWORD
        RESET INSTRUCTIONS. WE FAKE THIS AND NAVIGATE DIRECTLY TO THE PAGE THAT
        ALLOWS THE USER TO SET A NEW PASSWORD. YOU WILL NEED TO HANDLE THIS DIFFERENTLY
        IN YOUR CODE BY DEEP LINKING TO A PAGE LIKE THIS FROM THE RESET EMAIL.
      */
            this.showEmailForm = false;
            this.showPasswordForm = true;
        }
    }

    backtologin(): void {
        this.router.navigateByUrl('login');
    }

    changePassword(): void {
        if (this.passwordForm.valid) {
            /*
        HERE YOU NEED TO MAKE A CALL TO YOUR API TO RESET THE USER'S PASSWORD.
        WE FAKE THIS BY ASSUMING SUCCESS AND NAVIGATE TO THE LOGIN PAGE.
        YOU WILL NEED TO HANDLE DIFFERENT CASES HERE INCLUDING ERROR CONDITIONS.
      */
            this.router.navigateByUrl('login');
        }
    }
}
