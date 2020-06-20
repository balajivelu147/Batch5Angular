import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Batch5Angular';
  condition = true;
  constructor() { }
  ngOnInit() {

    // let x = 0;
    let i = 0;
    if (this.condition) {
      i = 0;
    }

    if (this.condition) {
      i = 0;
    }
  }
}
