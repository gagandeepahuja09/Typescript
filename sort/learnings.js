// In this particular project, rather than using parcel and compiling
// html directly, we will compile ts file to js ==> ts-node or tsc
// we are going to create 2 separate folders src ==> for ts and build ==> for compiled js 
// all this config will be specified in the tsconfig.json file
// tsc --init
// tsc ==> For compilation to JS
// tsc --watch ==> To continuously watch for changes

// For concurrent compilation and execution as soon as we make changes,
// we will use 2 packages: Nodemon and Concurrently

// Change the start script in package.json

// #79 2 Huge Issues
// We have to use this for both purposes, strings and numbers.
// 1. Issue with strings is that they are immutable ==> Hence swapping directly won't work
// 2. Checking only ascii values won't work ==> Hence comparison logic would be different.

// #80
// If we assign collection: number[] | string
// this type, then we would need be able to use the assignment operator
// for numbers also as with this type only functions and properties 
// common to both the types would be accessible.

// # 81 Solution to above problem: Using typeguards
// we can type guard, like if the collection is an instance of Array in JS
// , then only do that particular logic
// typeof ==> Array is also of type object

// Note: Rule for using typeguard in TS
// typeof to be used only with primitive types: string, number, boolean, symbol, etc.
// instanceof to be used with all other type: Arrays, Objects, Functions or any
// other type that we have created.



// #82 Why is this bad?
// If we have 50 different types tomorrow, for each of them we would need 
// to update our code and make changes to implement for that
// + 50 different if conditions for sort
// Very poor code, just like in my current org.

// #83 Solution: Extracting Key Logic
// We are going to use proper inheritance, interfaces and what not
// We will have a proper Sorter class, whose job is only to sort
// It's subparts like compare and swap would be handled by the derived / subclasses.

// #88 If some engineer is said to implement a sort implementation for a new type
// he doesn't have to redo stuff. Only needs to implement compare and swap method.

// Interfaces are not useful because we can describe a type. They are useful because
// we can set up a contract between one class & another class

// Rather than calling sorter.sort, all these classes should inherit
// the sort function.

// This will change by converting Sorter class into an abstract one

// Abstract Classes
// 1. Can't be used to create an object directly.
// 2. Only used as a parent class.
// 3. Can contain real implementation of some methods.
// 4. The implemented methods can refer to other methods that don't actually exist yet.
// 5. We still have to provide names & types for the un-implemented methods.
// 6. Can make child class promise to implement some other method.


// Abstract Classes V/s Interfaces
// Both set up contract b/w classes
// Interface ==> Loosely coupled way. When we have very different objects that we
// want to work together.
// Abstract Classes / Inheritance ==> Strongly couples classes together. eg. now numbers collection can't exist without sorter class.