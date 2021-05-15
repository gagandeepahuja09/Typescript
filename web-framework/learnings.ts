// yarn global add parcel-bundler@1.12.3
// parcel index.html

// We will have broadly 2 kinds of classes: Model Classes and View Classes
// Model classes: Classes that represent data.
// View classes: Classes that take care of html and events like click.

// Since this is a web framework, we want our web framework to be as reusable
// as possible

// Extraction Approach
// Build class User as a mega class with tons of methods.
// Refactor User to use composition
// Refactor user to be a reusable class that can represent any piece of data &
// not just a user. eg. a blogPost / comment / movieData / matchData

// Basic functionalities expected in User Class
// 1. Ability to store data, retrieve it and change it.
// 2. Ability to notify rest of the app when some data is changed.
// 3. Persist data on some outside server and then retrieve it at some future point.

// class User
// private data: UserProps
// get(propName: string): (string | number)
// set(update: UserProps): void
// on(eventName: string, callback: () => {})
  // Registers an event handler with this object, so that other parts of the app
  // know when something changes
  // Very similar to addEventListener is JS
// trigger(eventName: string): void
  // Triggers an event to tell other parts of the app that something has changed.
// fetch(): Promise
  // Fetches some data from the server about a particular user.
// save(): Promise
  // Save some data about this user to the server.

// Interfaces have both purposes
  // Create a new type
  // Get code reuse with implements and other features.


// set function in User
// We have to iterate through all object entries and assign all those properties
// from source(updatedData) to target(this.data)
// But there is already a function in JS that does just that
// It's a static function ==> Object.assign(target, source)


// Storing event listeners
// We need to store for each eventName, what all callbacks we need to call
// While that event is triggered.
// We are going to create a type alias for CallBack
// Type for it:
// { [key: string]: CallBack[] }
// Because we don't currently know what all keys it is going to have.

// type CallBack = () => {}
// In this TS is going to assume that it's a function returning an object
// Rather it should be a fn returning nothing.
// type CallBack = () => void