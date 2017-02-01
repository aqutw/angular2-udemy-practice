import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'bs-favo',
  templateUrl: 'favo.component.html'
})

export class FavoComponent {
  @Input() reviews: number;
}