// Importing Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // we need this module so that our app works in Browsers.

// Importing the root component (app.component.js)
import { AppComponent } from './app.component'; // You don't need to write down the .ts at the end of it.

// Decorators are instances of a third party module. They start with @ sign
@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent], // use the root component inside this module
  bootstrap: [AppComponent] // This isn't the Twitter-Bootstrap. This means start our app with the root component!
})

export class AppModule { }
