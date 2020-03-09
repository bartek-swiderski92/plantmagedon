import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorCardComponent } from '../shared/actor-card/actor-card.component';
import { MainRoutingModule } from './main-routing.module';
import { ButtonComponent } from '../shared/button/button.component';
import { MainComponent } from './main.component';


@NgModule({
  declarations: [
    MainComponent,
    ActorCardComponent,
    ButtonComponent
  ],

  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
