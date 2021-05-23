import { Model } from './Model'
import { Attributes } from './Attributes'
import { Eventing } from './Eventing'
import { ApiSync } from './ApiSync'
import { Collection } from './Collection'

export interface UserProps {
  // optional interface properties
  name?: string
  age?: number
  id?: number
}

const rootUrl = 'http://localhost:3000/users'

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Eventing(),
      new Attributes<UserProps>(attrs),
      new ApiSync<UserProps>(rootUrl)
    )
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(
      rootUrl,
      User.buildUser
    )
  }
}