// we generally don't directly invoke the methods of classes.(except static ones)
// we create an instance of it.

class Vehicle {
  protected honk(): void {
    console.log('beep')
  }
}

// when we are extending a class, we can choose to override some of the methods
// default behaviour for classes in JS is public

// we can't modify the access modifiers of the parent class in the child class.

// by adding private, we are not adding any layer of application security
// we use private methods, if we feel that providing access to some methods or properties
// may lead to other developers accidentally breaking the application / code.
class Car extends Vehicle {
  private drive(): void {
    console.log('Vrooooom.....')
  }
  protected honk(): void {
    console.log('beep beep')
  }
  startDrivingProcess(): void {
    this.drive()
    this.honk()
  }
}

const car = new Car()
car.startDrivingProcess()