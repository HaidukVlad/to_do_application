import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideIcons } from '@ng-icons/core';
import { heroChevronLeft } from '@ng-icons/heroicons/outline';
bootstrapApplication(AppComponent, appConfig);

const iconsProvider = provideIcons({ heroChevronLeft });

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    iconsProvider
  ]
})
.catch((err) => console.error(err));
