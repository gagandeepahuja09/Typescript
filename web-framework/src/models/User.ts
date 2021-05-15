interface UserProps {
  // optional interface properties
  name?: string
  age?: number
}

export class User {
  constructor(private data: UserProps) {}
  get(propName: string): (string | number) {
    return this.data[propName]
  }

  set(updatedData: UserProps): void {
    Object.assign(this.data, updatedData)
  }
}