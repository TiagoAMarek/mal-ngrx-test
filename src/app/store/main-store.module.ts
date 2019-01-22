import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { CommonModule } from '@angular/common'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { TopAnimesStoreModule } from './top-animes/module'

@NgModule({
  imports: [
    CommonModule,
    TopAnimesStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  declarations: []
})
export class MainStoreModule { }
