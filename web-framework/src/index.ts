import { UserForm } from './views/UserForm'

const rootEle = document.getElementById('root')

const userFormEle = new UserForm(rootEle)

for (let i = 0; i < 10; i++) {
  userFormEle.render()
}