import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { topAnimesReducer } from './reducer'
import { TopAnimeEffects } from './effects'

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('topAnimes', topAnimesReducer),
    EffectsModule.forFeature([TopAnimeEffects]),
  ],
  providers: [TopAnimeEffects]
})

export class TopAnimesStoreModule { }
