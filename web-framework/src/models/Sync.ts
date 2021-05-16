import axios, { AxiosResponse } from 'axios'
const SERVER_BASE_URL = 'http://localhost:3000'

export class Sync {
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
