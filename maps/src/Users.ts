import faker from 'faker'

// a type definition file is one which has all the interface for a particular type
// it can be found by searching for @types/package-name

// a type definint file can also be used as a documentation

export class User {
  // this is just for telling to TS the structure, not any initialization
  // so, we would need to do that in the constructor
  name: string
  location: {
    lat: number,
    long: number
  }

  constructor() {
    this.name = faker.name.findName()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      long: parseFloat(faker.address.longitude())
    }
  }
}