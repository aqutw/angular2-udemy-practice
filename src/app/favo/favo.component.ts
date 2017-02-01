import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'bs-favo',
  templateUrl: 'favo.component.html'
})

export class FavoComponent {
  @Input() reviews: number;

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  onClick(): void { // when favo onClick
    this.notify.emit('Message from favo');
  }
}