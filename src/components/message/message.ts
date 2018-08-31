import { Component, Input } from '@angular/core';

@Component({
  selector: 'ap-message',
  templateUrl: './message.html'
})
export class MessageComponent {

  @Input() text: string;

  constructor() { }
}