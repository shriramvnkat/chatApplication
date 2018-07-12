import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <p>
    <router-outlet></router-outlet>
    </p>
  `,
  styles: []
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
