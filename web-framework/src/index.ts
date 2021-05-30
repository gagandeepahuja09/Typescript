import { UserForm } from './views/UserForm'
import { User } from './models/User'

const rootEle = document.getElementById('root')

const user = User.buildUser({
  name: 'AAA',
  age: 22
})

const userFormEle = rootEle ? new UserForm(rootEle, user) : null

userFormEle?.render()
