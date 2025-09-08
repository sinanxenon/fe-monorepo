import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@org/shared';
import { Notification } from '@org/notification';
import { Antipassback } from '@org/antipassback';

@Component({
  imports: [RouterModule, ButtonComponent, Notification, Antipassback],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'project-two';
}
