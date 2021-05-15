interface UserProps {
  // optional interface properties
  name?: string
  age?: number
}

type CallBack = () => {}

export class User {
  events: { [key: string]: CallBack[] } = {}

  constructor(private data: UserProps) {}
  get(propName: string): (string | number) {
    return this.data[propName]
  }

  set(updatedData: UserProps): void {
    Object.assign(this.data, updatedData)
  }

  on(eventName: string, callback: CallBack): void {
  }
}