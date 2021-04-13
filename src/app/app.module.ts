import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './modules/shared/header/header.module';
import { SidebarModule } from './modules/shared/sidebar/sidebar.module';
import { FooterModule } from './modules/shared/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    SidebarModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
