import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rounded-corners',
  templateUrl: './rounded-corners.component.html',
  styleUrls: ['./rounded-corners.component.scss']
})
export class RoundedCornersComponent implements OnInit {

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
