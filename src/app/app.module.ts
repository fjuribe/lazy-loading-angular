import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AmericaComponent } from './america/america.component';
import { EuropaComponent } from './europa/europa.component';

@NgModule({
  declarations: [
    AppComponent,
    AmericaComponent,
    EuropaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
