import { User } from './models/User'

const myUser = new User({})

// myUser.events.on('click', () => {
//   console.log('clicked!!!')
// })

// myUser.events.trigger('click')

// myUser.fetch()

// // Since fetch is async, we waited for some time for testing
// setTimeout(() => {
//   console.log('YO', myUser.get('age'))
//   myUser.set({ name: 'NEW NAME' })
//   myUser.save()
// }, 4000)