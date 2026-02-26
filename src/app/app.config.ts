import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideIonicAngular } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { logOutOutline } from 'ionicons/icons';

addIcons({
  logOutOutline,
});

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideRouter(routes), provideIonicAngular({})],
};
