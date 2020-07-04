import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
// import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { environment } from 'src/environments/environment';
import { reducers } from './core/states/root.reducer';

const NGRX_IMPORTS = [
  StoreModule.forRoot(reducers),
  // StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
  EffectsModule.forRoot([]),
  StoreDevtoolsModule.instrument({
    name: 'ContactManagerNgRx',
    maxAge: 25,
    logOnly: environment.production
  })
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ...NGRX_IMPORTS,
    AppRoutingModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
