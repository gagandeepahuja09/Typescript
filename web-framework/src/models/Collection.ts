import { Eventing } from './Eventing'
import axios, { AxiosResponse } from 'axios'
import { User, UserProps } from './User'

export class Collection {
  models: User[]
  events: Eventing = new Eventing()

  constructor(public rootUrl: string) {}

  get on() {
    return this.events.on
  }

  get trigger() {
    return this.events.trigger
  }

  fetch(): void {
    axios
      .get(this.rootUrl)
      .then((response: AxiosResponse) => {
        this.models = response.data.map((attrs: UserProps) => {
          return User.buildUser(attrs)
        })
        this.trigger('change')
      })
  }
}