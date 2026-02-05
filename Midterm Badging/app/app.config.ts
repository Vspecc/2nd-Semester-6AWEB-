import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // <--- CHECK IMPORT

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),  // <--- MAKE SURE THERE IS A COMMA HERE
    provideHttpClient()     // <--- MAKE SURE PARENTHESES () ARE HERE
  ]
};