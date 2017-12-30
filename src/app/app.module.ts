import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Comp1Component } from './comps/comp1/comp1.component';
import { WelcomeComponent } from './comps/welcome/welcome.component';
import { TwainComponent } from './comps/twain/twain.component';
import {DashboardHeroComponent} from './comps/comp-with-inputs/dashboard-hero/dashboard-hero.component';
import {DashboardComponent} from './comps/comp-with-inputs/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    WelcomeComponent,
    TwainComponent,
    DashboardHeroComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
