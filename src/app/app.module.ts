import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AgnosticComponent } from './components/agnostic-component/agnostic-component.component';
import { AgnosticInputComponent } from './components/agnostic-input/agnostic-input.component';

@NgModule({
  declarations: [
    AppComponent,
    AgnosticComponent,
    AgnosticInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  entryComponents: [AgnosticInputComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
