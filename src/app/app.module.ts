import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { MainStoreModule } from './store'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
