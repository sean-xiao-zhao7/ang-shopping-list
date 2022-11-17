import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  compShown: string = 'recipe-book';

  onEmitCompShown(newCompShown: string) {
    this.compShown = newCompShown;
  }
}
