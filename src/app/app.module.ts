import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { ErrorModule } from './error/error.module';
import { GalleryModule } from './gallery/gallery.module';
import { AppRoutingModule } from './app-routing.module';
import { TeamModule } from './team/team.module';
import { ServiceModule } from './service/service.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    ContactModule,
    ErrorModule,
    GalleryModule,
    TeamModule,
    ServiceModule,
    HeaderModule,
    FooterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
