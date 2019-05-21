import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.scss']
})
export class LinesComponent implements OnInit {

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
