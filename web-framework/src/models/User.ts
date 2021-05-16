import { Eventing } from './Eventing'
export interface UserProps {
  // optional interface properties
  name?: string
  age?: number
  id?: number
}

export class User {
  events: Eventing = new Eventing()

  constructor(private data: UserProps) {}
  get(propName: string): (string | number) {
    return this.data[propName]
  }

  set(updatedData: UserProps): void {
    Object.assign(this.data, updatedData)
  }
}