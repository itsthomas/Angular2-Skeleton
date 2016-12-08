import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Importing the root module (app.module.js)
import {AppModule} from './app.module'; // You don't need to write down the .ts at the end of it.

const platform = platformBrowserDynamic();
// This isn't the Twitter-Bootstrap. 
// This means start our app with the root module! Root module itself starts with root component.
platform.bootstrapModule(AppModule);
