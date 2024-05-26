import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Component } from '@angular/core';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

@Component({
  selector: "app-Hello",
  template:`
    <h1>Hello</h1>
    <h2>Your name: {{ user.name }}</h2>
    <p>Your name: {{user.age}}</p>
  `,
})
export class HelloComponent {
  user = {
    name: "Cong son",
    age: 30
  };
}
