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

// Checking if data is persisted in DB
// Check if id property is there or not
// id ==> Persisted in DB
// no id ==> Not persisted in DB

// No id ==> Brand new User ==> POST
// id ==> PUT

// Currently User class has 3 different kinds of functions:
// Eventing: on, trigger
// Preserve to Server & Fetching from Server: save, fetch
// Modelling: getters and setters

// Since these aren't inter-related we should have separate classes for them.
// Making use of composition
// class User
// attributes: Attributes
// events: Eventing
// sync: Sync

// There are three approaches for integrating events instance in 
// User class from Eventing class using composition
// Approach 1: Add another argument in the constructor of User
  // Con: A little bit verbose

// Approach 2: Similar to static methods, create a static method in which 
// we only need to pass the data 
// property and events would be created and added in the static method.

// Approach 3: Hardcode events as new Eventing() in the User class
// Since we don't expect the events class to change in the future, 
// this is the best possible soln currently.

// One downside of composition here is that we cannot directly call user.on 
// and user.trigger, rather use user.events.on and user.events.trigger 

// Extraction of Sync class is tricky here. There is circular dependency
// as Sync requires get and set which are a part of User class
// while User requires fetch and save present in the Fetch class.
// Approaches to remove this circular dependency:
// 1) Have parameters save(id, data: UserProps)
  // this will limit it to only users
// 2) Serialize and Deserializing and using that as type ==> Still limited
// 3) Best solution: Sync is a generic class to customize the type of 'data'
// coming into save. Can be easily used in other classes.

// class Sync<T>
// save(id: number, data: T): AxiosPromise<T>
// fetch(id: number): AxiosPromise<T>
// Why is it important to return promise?
// For save it's important to know if the data was properly saved or not from
// the response.
// In case of fetch, after fetching we now don't want to set the property as that is
// specific to the user class, so we will remove the 

// sync class refactoring to remove user dependent 
// code(adding arguments in fetch and save), 
// passing user arguments and adding rootUrl property

// class User
// sync: Sync<UserProps>

// For connecting user to sync there are again those 3 options
// Here in this case, it is much more likely that we could be changing Sync class
// if requirements change, eg. now we want to save to our local machine / to a DB
// but we are still going to choose the hard-coding way.

// sync: Sync<UserProps> = new Sync<UserProps>(rootUrl)
// While creating this, we get an error that id is required in hasId but optional
// in userProps
// So we mark id as optional in hasId


// CASE to be handle while Using OPTIONAL PROPERTIES
// If we hover over id here in Sync.ts ===> const { id } = data
// we see that id is assigned a type of number by TS
// this is not totally correct as an optional property could have type of undefined also
// So here type should be number | undefined
// How to correct? TS has one config flag "strict" set to false by default
// But if initialize the tsconfig.json file(tsc --init), we get the flag to true
// This has enabled stricter type checking
// "strictNullChecks": true 

// We will delete the tsconfig file for now, because it's going us a lot of warnings
// Which aren't really needed.

// Moving Attributes class
// data property is of generic type
// Issue with get: Since we want it to be reusable across different classes,
// we cannot use (string | number) as the return type.



// The Get Method's Shortcoming
// Let's take an example
// const attrs = new Attributes<UserProps>({
//   id: 1,
//   name: 'a',
//   age: 22
// })
// const id = attrs.get('id')
// If we hover over id, then TS will show it's type as 
// number | string | boolean, since this is what the type we are returning in get
// This would result in only the common functions being available
// Ideally we would want the TS checks the type returned by get and then assigns
// id variable a type of number
// We would write a generics solution to solve this problem.

// if (typeof )
// typeof acts as type guard

// Two Important Rules:
// 1. In JS(& therefore TS) all object keys are string ==> Obvious
// 2. In TS strings can be types
// type MyNameType = 'gagan'
// This creates a new type which will only satisfy if string is 'gagan'
// From points 1 & 2 we can infer that we can create object keys as types. 


// Solving Get Method's shortcoming using generics
// class Attributes<T>
// T is going to be an object like UserProps
// get<K extends keyof T>(key: K): T[K]
// This means that K will be one of the keys present in T
// Hence the return type will be T[K] 

// const name = attrs.get('name') we get correct type using inference
//const names = attrs.get('names') now after generic constraint we can only
//  assign the 3 types which are keys, hence the error


// Re-integrating Attributes
// We will try to follow a similar inline styles approach
// But we can see that this class requires passing in the data. Hence we need to 
// create this in the User constructor.


// COMPOSITION IS DELEGATION
// Caller === User === Composition Classes of User
// Let's say we wanna implement save
// With the new approach, we cannot do save directly ==> user.save()
// Now we need the data. How will we get it? We need to get through all
// properties
// This example shows that composition is delegation
// Rather than direct pass through of the caller to the composition classes
// It should go to the user class function and the user class will delegate it
// to the composition classes.
// Now we will complete those functions, which the user class had access to earlier.


// Reminder On Accessors
// Here there will be 2 kinds of fns. In one, there will be direct passthrough
// to a class. Others will require interaction of one / more class
// Direct passthrough ==> get, on, trigger
// To use something as getter / accessor ==> add get at the start


// Passthrough Methods
// On method
// Approach 1:
// on(eventName: string, callback: CallBack): void {
//   this.events.on(eventName, callback)
// }
// Problem with this approach: Anytime we change the on implementation in the Eventing class, we 
// would have to change here too

// Approach 2: We will create a getter and return the reference to the function of event
// Now when we do user.on ==> we get the reference. We can now call this using
// user.on('a', () => {})
// This simplifies it a lot :)


// A Context Issue: user.get is failing
// Remember how this works in Javascript: this always point to the object calling the function.
// Not true for Arrow functions
// user.get('name') ==> will try to access user.data.name ==> Since data is undefined.
// Solution to this problem ==> Use arrow functions ==> For arrow functions, this always points
// to the object where it is residing.
// Hence by using arrows functions, normal functions turn into bound functions.
// We are going to do the same for on, trigger.


// Setting data while Triggering
// We are going to add a new requirement to the set function
// whenever we set any data, we are going to trigger the change event
// so that other parts of the appln are informed about this.


// Composition Vs Inheritance Again
// Issues with the current code:
// 1) The nested objects are all public --> Should be private
// 2) The nested object are all hardcode + Don't use interfaces
// 3) We don't want to have to create all these methods for each new model we create.
// For problem 3 ==> User class => 
// model: Model 
// Composition approach ==> We don't want to be doing user.model.get() etc everytime
// also we don't want to be creating their passthroughs
// Since the parent class won't change in this class, we can use Inheritance here.


// Extracting A Model Class
// In Model class, we will keep interfaces for the 3 classes: Events, Sync and 
// Attributes as a different class might wanna implement a different way of using
// these. Eg. Images class might wanna sync from local storage.



// Extending the User
// const id = this.get('id')
// Problem: Here T is a generic type and not all types have property P
// So, for this we will create a new type HasId and T will extend that.


// Final User Refactor
// After adding the model class, we can see that it's better if we create
// a static class for user to preconfigure all the 3 objects that would 
// be needed.

// Shortened Passthrough Methods
// Rather than using get method we create variables
// Since we initialize it with constructors, make sure that you initialize in 
// the correct order
// Eg. events should be initialized before initializing the "on" variable.


// Users Collection
// Right now we only have a fetch for a specific id
// But when we start up the application, we are not aware of the list of users.
// First we will start with UsersCollection and then try and make it reusable
// a convert to class Collection
// UserCollection ===> models: User[], events: Eventing, fetch()
// Collection<T> ===> models: T[], events, fetch()

// Implementing A Users Collection
// Note: Here we need to create getters for on & trigger. This is because models
// are created inline. Hence if we use normal variables
// this.on = this.events.on will be before this.events = new Eventing()
// if we had them in the constructor like the earlier example, we could 
// have used the variable syntax.




// VIEW CLASSES
// We wanna have a functionality similar to react classes
// Examples: UserShow, UserForm, UserEdit. We should be able to nest UserShow
// and UserForm inside UserEdit
// 1) Each view must produce HTML
// 2) You should be able to nest one view's HTML into another.
// 3) There will probably be a tight coupling between a view and a model.
// 4) We need to be able to reach into the HTML produced by a view and
// get a specific element.
// Plan: Build UserForm & extract reusable logic from it, for building 
// UserEdit and UserShow.



// Building The UserForm
// UserForm class ==> parent: Element, template(): string, render(): void
// render method gets the template and inserts it into the DOM
// It is just going to append in the parent element as a child.
// parent: Element There are a lot of built-in interfaces like Element, HTMLElement,... etc 
// available through the window in TS.

// The UserForm's render method
// Create a new element
// Assign the inner html
// Append to the parent element

// Defining An Events Map
// We should be able to bind event handlers to the HTML elements.

// Adding Model Properties to the UserForm
// In the next step we will bind events to change the user data

// Re-rendering On Model Change
// 'change' event is triggered whenever we set a property.
// hence we will listen to it using on & re-render the dom.

// Strict Null Checks
// By default the strict null checks are not handled by TS. 
// Ex: document.querySelector ==> could give Element or null.
// Hence to handle that, we have to add the ts config file(& change the flag)
// "strictNullChecks": true 



// Reusable View Logic
// We have 2 options of composition & inheritance
// Segregation:
// View: parent: Element, model: User(Generics to be used),render(): void, 
// bindEvents(): void, bindModel(): void 

// UserForm: 
// template(): string, eventsMap(), onSetNameClick, onSetAgeClick

// render(V) ---> template(U)
// bindEvents(V) ---> eventsMap(U)
// onSetNameClick, onSetAgeClick(U) --> parent(V)
// whenever we have such kind of bidirectional relationship, then using composition is not ideal
// Also we know that a UserForm is a View
// Hence using Inheritance with Abstract classes would be a better option
// template() and bindEvents() would be abstract functions as they won't have any implementation for
// View class and the child class needs to implement these.



// Extending With Generic Constraints
// public model: User ===> model: T
// We would need to specify the generic for View
// View<T>, model: T.
// Now it show that the property "on" need not exist on type T.
// We need to specify the type of model for the view.
// We can do this by extending the Model class as a type. T extends Model
// But model also has a generic constraint example Model<UserProps>
// but we can't hardcode UserProps here since this can have any type
// so for this, we also pass in a 2nd type called K
// View<T extends Model<K>, K>
// Now in userForm we will specify the 2 generic types in UserForm class
// View<User, UserForm>


// Nesting With regions
// regionsMap() will return an obj that will specify the selector where a region is to
// be placed.
// regionsMap() ==> userShow --> .user-show
// userForm --> .user-form
// regions {
// userShow: Element where this should be placed
// userForm: Element where this should be placed
// }
// we will create a bindRegions method which will create the regions object
// from regionsMap
// this will be called in the render method

// we will also have an onRender method which will be optional
// this will be used to create instance of child class with their 
// parent elements specified in the regions object. 



// Collection Views
// abstract class CollectionView
// collection: Collection
// render(): void
// abstract renderItem(model, itemParent): void