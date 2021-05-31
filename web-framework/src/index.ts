import { User } from './models/User'
import { UserEdit } from './views/UserEdit'

const rootEle = document.getElementById('root')
const user = User.buildUser({
  name: 'AAA',
  age: 22
})
const userEditEle = rootEle ? new UserEdit(rootEle, user) : null
userEditEle?.render()

const userCollection = User.buildUserCollection()
userCollection.fetch()
