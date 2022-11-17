import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() emitCompShown = new EventEmitter<string>();

  changeCompShown(compShown: string) {
    this.emitCompShown.emit(compShown);
  }
}
