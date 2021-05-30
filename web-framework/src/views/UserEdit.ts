import { View } from './View'
import { User, UserProps } from '../models/User'

export class UserShow extends View<User, UserProps> {
  template() {
    return `
      <div>
        <div class="user-show"></div>
        <div class="user-edit"></div>
      </div>
    `
  }
}