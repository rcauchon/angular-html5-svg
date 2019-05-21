import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangles',
  templateUrl: './rectangles.component.html',
  styleUrls: ['./rectangles.component.scss']
})
export class RectanglesComponent implements OnInit {

  show = false;
  buttonIcon: any = 'eye';
  buttonName: any = 'Show';
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.show = !this.show;
    if (this.show) {
      this.buttonName = 'Hide';
      this.buttonIcon = 'eye-slash';
    } else {
      this.buttonName = 'Show';
      this.buttonIcon = 'eye';
    }
  }
}
