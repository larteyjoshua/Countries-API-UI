import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';

import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';

import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { MapComponent } from './components/map/map.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { BackComponent } from './components/back/back.component';

const MaterialModules = [
  ToggleButtonModule,
  ToolbarModule,
  InputTextModule,
  DropdownModule,
  ToastModule,
  CardModule,
  ButtonModule,
  ChipModule
]

@NgModule({
  declarations: [
    AppComponent,
    ThemeSwitcherComponent,
    HeaderComponent,
    MainComponent,
    ListComponent,
    MapComponent,
    CountryDetailsComponent,
    BackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...MaterialModules,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
