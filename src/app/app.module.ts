import { BrowserModule } from '@angular/platform-browser'
import { EffectsModule } from '@ngrx/effects'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { TopAnimeEffects } from './store/effects/top-animes.effects'
import { TopAnimesReducer } from './store/reducers/top-animes-reducer'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EffectsModule.forRoot([TopAnimeEffects]),
    HttpClientModule,
    StoreModule.forRoot({ topAnimes: TopAnimesReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
