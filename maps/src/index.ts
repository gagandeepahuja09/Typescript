import { Company } from './Company'
import { CustomMap } from './CustomMap'
import { User } from './Users'

// in typescript, classes have dual nature. They can be used both for creating instances
// and for referencing types.

const user = new User()
const company = new Company()
const customMap = new CustomMap('map')
customMap.addMarker(user)
customMap.addMarker(company)

// there are many functions exposing which to other developers might break our application
// for that we will create a helper class / custom class in which we will only expose very
// limited functions like addMarker. This will significa
// google
// CMD SHIFT P ==> Fold Level 2
// cmd shift click to view the 
// Optional arguments in TS(We can pass it in, but optional) ==> opts?: