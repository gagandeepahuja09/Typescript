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

  get on() {
    return this.events.on
  }

  get trigger() {
    return this.events.trigger
  }

  get get() {
    return this.attributes.get
  }
}

const user = new User({
  name: 'Hello'
})

console.log(user.get('name'))


user.on('click', () => {
  console.log('clicked')
})

user.trigger('click')
user.trigger('click')