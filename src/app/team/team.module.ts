import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { HomeModule } from '../home/home.module';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    TeamRoutingModule
  ],
  declarations: [TeamComponent]
})
export class TeamModule { }
