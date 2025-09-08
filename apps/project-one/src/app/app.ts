import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@org/shared';
import { Door } from '@org/door';
import { Templates } from '@org/templates';

@Component({
  imports: [RouterModule, ButtonComponent, Door, Templates],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'project-one';
}
