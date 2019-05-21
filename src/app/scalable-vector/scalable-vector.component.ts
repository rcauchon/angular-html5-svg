import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scalable-vector',
  templateUrl: './scalable-vector.component.html',
  styleUrls: ['./scalable-vector.component.scss']
})
export class ScalableVectorComponent implements OnInit {

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
