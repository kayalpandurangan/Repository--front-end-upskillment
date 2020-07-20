import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }    from '@angular/forms';

import { MatFormFieldModule, MatSelectModule ,MatInputModule,MatButtonModule} from 
   '@angular/material';
   import {MatCheckboxModule} from '@angular/material/checkbox';
import { SeriesComponent } from './series/series.component';
import { SeriesService } from '../shared/service/series.service';


@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
   
    
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule
   
  ],
  providers: [SeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
