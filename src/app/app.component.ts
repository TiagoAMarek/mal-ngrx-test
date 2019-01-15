import { Component } from '@angular/core'
import { FetchAnimes } from './store/actions/top-animes.actions'
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  topAnimes: Observable<any>

  constructor(store: Store<any>) {
    this.topAnimes = store.select('topAnimes')
    store.dispatch(new FetchAnimes([]))
  }
}
