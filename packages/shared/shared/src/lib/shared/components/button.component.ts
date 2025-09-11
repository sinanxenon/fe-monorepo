import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
      style="background-color: red; color: white; padding: 10px; border-radius: 5px; border: none; cursor: pointer;"
    >
      shared button! redeploy on both app
    </button>
  `,
})
export class ButtonComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
