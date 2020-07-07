import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountdowmTimerComponent } from './countdowm-timer/countdowm-timer.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { HackernewComponent } from './hackernew/hackernew.component';
import {FormsModule} from "@angular/forms";
import { LikesComponent } from './likes/likes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { OutputComponent } from './output/output.component';

@NgModule({
  declarations: [
    AppComponent,
    CountdowmTimerComponent,
    RatingBarComponent,
    PipeDemoComponent,
    HackernewComponent,
    LikesComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
