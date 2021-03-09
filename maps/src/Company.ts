import faker from 'faker'

export class Company {
  companyName: string
  catchPhrase: string
  location: {
    lat: number,
    long: number
  }
  constructor() {
    this.companyName = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      long: parseFloat(faker.address.longitude())
    }
  }
}