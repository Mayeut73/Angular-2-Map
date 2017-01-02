import { Component } from '@angular/core';

// webpack html imports
let template = require('./navbar.component.html');

@Component({
  selector: 'my-navbar',
  template: template
})
export class NavBarComponent {
  
}