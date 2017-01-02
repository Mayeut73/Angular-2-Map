import { Component } from '@angular/core';

// webpack html imports
let template = require('./header.component.html');

@Component({
  selector: 'my-header',
  template: template
})
export class HeaderComponent {
  
}