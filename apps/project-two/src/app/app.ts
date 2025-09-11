import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@org/shared';
import { Notification } from '@org/notification';
import { Antipassback } from '@org/antipassback';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/project-two';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [
    RouterModule,
    ButtonComponent,
    Notification,
    Antipassback,
    JsonPipe,
  ],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly http = inject(HttpClient);

  protected readonly envName = environment.environmentName;

  response: any = '';

  ngOnInit() {
    if (environment.environmentName === 'development') {
      console.log('Development environment');
      this.http.get('api/hello').subscribe((res) => {
        this.response = res;
      });
    } else {
      console.log('Production environment');
    }
  }
}
