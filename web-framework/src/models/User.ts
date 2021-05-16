import axios, { AxiosResponse } from 'axios'
import { Eventing } from './Eventing'
interface UserProps {
  // optional interface properties
  name?: string
  age?: number
  id?: number
}

const SERVER_BASE_URL = 'http://localhost:3000'

export class User {
  events: Eventing = new Eventing()

  constructor(private data: UserProps) {}
  get(propName: string): (string | number) {
    return this.data[propName]
  }

  set(updatedData: UserProps): void {
    Object.assign(this.data, updatedData)
  }

  fetch(): void {
    axios
      .get(`${SERVER_BASE_URL}/users/${this.data.id}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data)
      })
  }

  save(): void {
    const { id } = this.data
    if (id) {
      axios
      .put(`${SERVER_BASE_URL}/users/${id}`, this.data)
    } else {
      axios
      .post(`${SERVER_BASE_URL}/users`, this.data)
    }
  }
}