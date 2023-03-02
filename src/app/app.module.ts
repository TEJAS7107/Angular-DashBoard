import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './Compo/first/first.component';
import { SecondComponent } from './Compo/second/second.component';
import { ThirdComponent } from './Compo/third/third.component';
import { FourthComponent } from './Compo/fourth/fourth.component';
import { NgxGaugeModule } from 'ngx-gauge';
import { FiveComponent } from './Compo/five/five.component';
import { SixComponent } from './Compo/six/six.component';
import { SevenComponent } from './Compo/seven/seven.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FiveComponent,
    SixComponent,
    SevenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGaugeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
