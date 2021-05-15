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