import { Eventing } from './Eventing'
import { Sync } from './Sync'
import { Attributes } from './Attributes'

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
}