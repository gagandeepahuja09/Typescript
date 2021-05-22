import { Eventing } from './Eventing'
import { Sync } from './Sync'
import { Attributes } from './Attributes'
import { AxiosResponse } from 'axios'

export interface UserProps {
  // optional interface properties
  name?: string
  age?: number
  id?: number
}

const rootUrl = 'http://localhost:3000/users'

export class User {
  events: Eventing = new Eventing()
  sync: Sync<UserProps> = new Sync<UserProps>(rootUrl)
  attributes: Attributes<UserProps>

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs)
  }

  get on() {
    return this.events.on
  }

  get trigger() {
    return this.events.trigger
  }

  get get() {
    return this.attributes.get
  }

  set(update: UserProps): void {
    this.attributes.set(update)
    this.events.trigger('change')
  }

  fetch(): void {
    const id = this.get('id')

    if (typeof id !== 'number') {
      throw new Error('An argument of type number is expected')
    }

    this.sync.fetch(id).then((response: AxiosResponse) => {
      this.set(response.data)
    })
  }

  save(): void {
    this.sync.save(this.attributes.getAll())
      .then((response: AxiosResponse) => {
        this.trigger('save')
      })
      .catch(() => {
        this.trigger('error')
      })
  }
}