import { UserForm } from './views/UserForm'
import { User } from './models/User'

const rootEle = document.getElementById('root')

const user = User.buildUser({
  name: 'AAA',
  age: 22
})

const userFormEle = new UserForm(rootEle, user)

userFormEle.render()
