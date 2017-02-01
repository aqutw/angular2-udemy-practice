import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'bs-favo',
  styleUrls: ['favo.component.css'],
  templateUrl: 'favo.component.html'
})

export class FavoComponent {
  // @Input
  @Input() favoWhat: string;
  @Input() reviews: number;
  @Input() isFavo: boolean;

  // @Output
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  @Output() favoClicked: EventEmitter<string> = new EventEmitter<string>();

  onClick(): void { // when favo onClick
    // this.notify.emit('Message from favo');
    console.log('favo.ts onClick');
    this.favoClicked.emit(`${this.favoWhat} was favoed.`);
    this.isFavo = !this.isFavo;
  }

  getIsFavo(isFavo: boolean): boolean { // a functional getter
    return !!this.isFavo;
  }
}