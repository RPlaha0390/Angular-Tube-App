import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TubeListComponent } from './tube-list/tube-list.component';
import { TubeService } from './tube-list/tube-list.service';

@NgModule({
  declarations: [
    AppComponent,
    TubeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
