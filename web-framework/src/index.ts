import { User } from './models/User'

const user = new User({ name: 'myName', age: 22 })

console.log(user.get('age'))
console.log(user.get('name'))