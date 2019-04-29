import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';undefined;
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './quote-form/form.component';
import { HighlightDirective } from './highlights.directive';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { DateCountPipe } from './date-counter.pipe';
import { QuoteDisplayComponent } from './quote/quote-display.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HighlightDirective,
    QuoteDetailsComponent,
    DateCountPipe,
    QuoteDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],

  bootstrap: [AppComponent]
  
})
export class AppModule { }
