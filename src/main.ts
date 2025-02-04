import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './app/app.routes';
import {LocationStrategy,HashLocationStrategy} from '@angular/common';

bootstrapApplication(AppComponent,{
  providers:[provideRouter(routes,withHashLocation()),
    {provide:LocationStrategy,
      useClass:HashLocationStrategy
    }
  ]
})
  .catch((err) => console.error(err));
