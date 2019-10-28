import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TemplatereferenceComponent } from './templatereference/templatereference.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import {FormsModule} from '@angular/forms';
import { StructuraldirectivesComponent } from './structuraldirectives/structuraldirectives.component';

@NgModule({
  declarations: [
    AppComponent,
    TestcomponentComponent,
    EventbindingComponent,
    TemplatereferenceComponent,
    TwowaybindingComponent,
    StructuraldirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
