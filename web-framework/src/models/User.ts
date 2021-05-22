import { Model } from './Model'

export interface UserProps {
  // optional interface properties
  name?: string
  age?: number
  id?: number
}

const rootUrl = 'http://localhost:3000/users'

export class User extends Model<UserProps> {
}