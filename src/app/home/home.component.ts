import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent {
    username;
    constructor(private readonly router: Router, private readonly appService: AppService) {}

    logout(): void {
        this.appService.logout();
        this.router.navigateByUrl('login');
    }
}
