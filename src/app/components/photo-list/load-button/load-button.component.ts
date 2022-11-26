import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.css'],
})
export class LoadButtonComponent {
  @Input() hasmore: boolean = false;

  constructor() {}
}
