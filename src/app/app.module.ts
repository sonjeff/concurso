import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AdminComponent } from './components/admin/admin.component';
import {CardModule} from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import { VaccineService } from './services/vaccine.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    CardModule,
    RouterModule,
    ButtonModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule
    
  ],
  providers: [VaccineService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
