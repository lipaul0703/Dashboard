import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxBarGaugeModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieCharComponent } from './components/cahrs/pie-char/pie-char.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { CenterComponent } from './components/layout/center/center.component';
import { BottomComponent } from './components/layout/bottom/bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    PieCharComponent,
    HomeComponent,
    HeaderComponent,
    CenterComponent,
    BottomComponent
  ],
  imports: [
    DxBarGaugeModule,


    
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
