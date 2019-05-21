import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee , faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


import { ScalableVectorComponent } from './scalable-vector/scalable-vector.component';
import { LinesComponent } from './lines/lines.component';
import { RectanglesComponent } from './rectangles/rectangles.component';
import { RoundedCornersComponent } from './rounded-corners/rounded-corners.component';
import { CirclesComponent } from './circles/circles.component';
import { PolylinesComponent } from './polylines/polylines.component';

library.add(faCoffee);
library.add(faEye);
library.add(faEyeSlash);

@NgModule({
  declarations: [
    AppComponent,
    ScalableVectorComponent,
    LinesComponent,
    RectanglesComponent,
    RoundedCornersComponent,
    CirclesComponent,
    PolylinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
