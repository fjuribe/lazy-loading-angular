import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EuropaRoutingModule } from './europa-routing.module';
import { EspanaComponent } from './espana/espana.component';
import { ItaliaComponent } from './italia/italia.component';
import { FranciaComponent } from './francia/francia.component';


@NgModule({
  declarations: [EspanaComponent, ItaliaComponent, FranciaComponent],
  imports: [
    CommonModule,
    EuropaRoutingModule
  ]
})
export class EuropaModule { }
