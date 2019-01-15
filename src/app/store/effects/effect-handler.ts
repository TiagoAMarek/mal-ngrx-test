import { HttpClient } from '@angular/common/http'
import { Actions } from '@ngrx/effects'
import { environment } from '@env/environment'

const { baseUrl } = environment

export abstract class EffectHandler {

  constructor(
    protected http: HttpClient,
    protected actions: Actions
  ) {}

  get(path, action) {
    return this.http.get(baseUrl + path, action)
  }
}
