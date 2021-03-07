// we generally don't directly invoke the methods of classes.(except static ones)
// we create an instance of it.

class Vehicle {
  drive(): void {
    console.log('Chugga Chugga')
  }

  honk(): void {
    console.log('beep')
  }
}

// when we are extending a class, we can choose to override some of the methods
class Car extends Vehicle {
  drive(): void {
    console.log('Vrooooom.....')
  }
}

const vehicle = new Vehicle
vehicle.drive()
vehicle.honk()

const car = new Car()
car.drive()
car.honk()