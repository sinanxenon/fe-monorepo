import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@org/shared';
import { Notification } from '@org/notification';
import { Antipassback } from '@org/antipassback';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/project-two';

@Component({
  imports: [RouterModule, ButtonComponent, Notification, Antipassback],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly http = inject(HttpClient);

  protected readonly envName = environment.environmentName;

  response: any = '';

  ngOnInit() {
    this.http.get('api/hello').subscribe((res) => {
      this.response = res;
    });
  }
}
