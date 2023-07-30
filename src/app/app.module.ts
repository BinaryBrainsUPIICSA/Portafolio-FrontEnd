import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from '../shared/modules/shared/shared/shared.module';
import { BbPlNavegacionComponent } from './components/bb-pl-navegacion/bb-pl-navegacion.component';
import { BbPlChatbotComponent } from './components/bb-pl-chatbot/bb-pl-chatbot.component';
import { BbPlCarrouselComponent } from './components/bb-pl-carrousel/bb-pl-carrousel.component';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import {CdkDropList} from "@angular/cdk/drag-drop";
// register Swiper custom elements
register();

@NgModule({
  declarations: [
    AppComponent,
    BbPlNavegacionComponent,
    BbPlChatbotComponent,
    BbPlCarrouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) =>
          new TranslateHttpLoader(http, './assets/i18n/', '.json'),
        deps: [HttpClient],
      },
    }),
    CdkDropList,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
