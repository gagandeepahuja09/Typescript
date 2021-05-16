import axios, { AxiosResponse } from 'axios'
interface UserProps {
  // optional interface properties
  name?: string
  age?: number
  id?: number
}

const SERVER_BASE_URL = 'http://localhost:3000'

type CallBack = () => void

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
    const handlers = this.events[eventName] || []
    handlers.push(callback)
    this.events[eventName] = handlers
  }

  trigger(eventName: string) {
    const handlers = this.events[eventName] || []
    handlers.forEach(callback => {
      callback()
    })
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
      console.log('HERE111')
      axios
      .put(`${SERVER_BASE_URL}/users/${id}`, this.data)
    } else {
      axios
      .post(`${SERVER_BASE_URL}/users`, this.data)
    }
  }
}