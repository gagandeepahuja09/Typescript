// we generally don't directly invoke the methods of classes.(except static ones)
// we create an instance of it.

class Vehicle {
  // color: string

  // constructor(color: string) {
  //   this.color = color
  // }
  // instead use the shortcut
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep')
  }
}

const vehicle = new Vehicle('orange')
console.log(vehicle.color)

// we can use access modifiers with fields and properties too.

// when we are extending a class, we can choose to override some of the methods
// default behaviour for classes in JS is public

// we can't modify the access modifiers of the parent class in the child class.

// by adding private, we are not adding any layer of application security
// we use private methods, if we feel that providing access to some methods or properties
// may lead to other developers accidentally breaking the application / code.
class Car extends Vehicle {
  // whenever we define a constructor in derived class, we are required to call 
  // the constructor of parent class as well.
  constructor(public wheels: number, color: string) {
    super(color)
  }
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

const car = new Car(1, 'red')
car.startDrivingProcess()