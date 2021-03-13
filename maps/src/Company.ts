import faker from 'faker'
import { Mappable } from './CustomMap'

// implements ensures that Company adheres to all properties specified in
// Mappable
export class Company implements Mappable {
  companyName: string
  catchPhrase: string
  location: {
    lat: number,
    lng: number
  }
  color: string = 'red'
  
  constructor() {
    this.companyName = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `
      <div>
        <h1>YO ${this.catchPhrase}!</h1>
        <h3>Company Name: ${this.companyName}</h3>
      </div>
    `
  }
}