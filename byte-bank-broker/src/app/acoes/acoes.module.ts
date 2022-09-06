import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcoesRoutingModule } from './acoes-routing.module';
import { AcoesComponent } from './acoes.component';
import { SharedModule } from '../shared/shared.module';
import { CardAcoesComponent } from './card-acoes/card-acoes.component';
import { MicroAcoesComponent } from './micro-acoes/micro-acoes.component';


@NgModule({
  declarations: [AcoesComponent, CardAcoesComponent,MicroAcoesComponent],
  imports: [
    CommonModule,
    AcoesRoutingModule,
    SharedModule
  ]
})
export class AcoesModule { }
