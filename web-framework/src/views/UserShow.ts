import { View } from './View'
import { User, UserProps } from '../models/User'

export class UserShow extends View<User, UserProps> {
  template() {
    return `
      <div>
        <div>User Details</div>
        <div>User Name: ${this.model.get('name')}</div>
        <div>User Age: ${this.model.get('age')}</div>
      </div>
    `
  }
}