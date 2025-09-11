import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@org/shared';
import { Door } from '@org/door';
import { Templates } from '@org/templates';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/project-one';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [RouterModule, ButtonComponent, Door, Templates, JsonPipe],
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
