import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceComponent } from './service.component';
import { ListComponent } from './list/list.component';
import { BottomComponent } from './bottom/bottom.component';

@NgModule({
  imports: [
    CommonModule,
    ServiceRoutingModule
  ],
  declarations: [ServiceComponent, ListComponent, BottomComponent]
})
export class ServiceModule { }
