import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'bs-welcome',
  templateUrl: 'welcome.component.html',
  styleUrls: ['welcome.component.css'],
  styles: ['.byline{color:green}'], // <---ng2 will take the last one style, it will not take both of styleUrls AND styles
})

export class WelcomeComponent {
  pageTitle: string = "Welcome";
}