import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot/forgot.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'forgot', component: ForgotPasswordComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' },
];
