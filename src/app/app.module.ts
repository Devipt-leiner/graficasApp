import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Chart } from 'chart.js';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraficaBarraComponent } from './graficas/components/grafica-barra/grafica-barra.component';
import { MenuComponent } from './shared/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    GraficaBarraComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    Chart
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
