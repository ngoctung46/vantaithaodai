import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SliderComponent } from './slider/slider.component';
import { BannerComponent } from './banner/banner.component';
import { StaffComponent } from './staff/staff.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, SliderComponent, BannerComponent, StaffComponent],
  exports: [StaffComponent]
})
export class HomeModule { }
