import faker from 'faker'
import { Mappable } from './CustomMap' 

// a type definition file is one which has all the interface for a particular type
// it can be found by searching for @types/package-name

// the goal of a ts file is to help ts understand how a particular 3rd party library works, what all variables it has and what all types they return 
// a type definition file can also be used as a documentation

// structure of a typical TS file ==> 
// 1. Interface definitions for working with this class
// 2. Class definition
// this will result in more code reuse and also provide low amount of coupling

export class User implements Mappable {
  // this is just for telling to TS the structure, not any initialization
  // so, we would need to do that in the constructor
  name: string
  location: {
    lat: number,
    lng: number
  }
  color: string = 'yellow'

  constructor() {
    this.name = faker.name.findName()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `User Name: ${this.name}`
  }
}