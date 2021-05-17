import { Eventing } from './Eventing'
import { Sync } from './Sync'
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

  constructor(private data: UserProps) {}
  get(propName: string): (string | number) {
    return this.data[propName]
  }

  set(updatedData: UserProps): void {
    Object.assign(this.data, updatedData)
  }
}