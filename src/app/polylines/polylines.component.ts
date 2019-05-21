import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polylines',
  templateUrl: './polylines.component.html',
  styleUrls: ['./polylines.component.scss']
})
export class PolylinesComponent implements OnInit {

  show = false;
  buttonIcon: any = 'eye';
  buttonName: any = 'Show';
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.show = !this.show;
    if (this.show){
      this.buttonName = 'Hide';
      this.buttonIcon = 'eye-slash';
    } else {
      this.buttonName = 'Show';
      this.buttonIcon = 'eye';
    }
  }
}
