// instructions to every other class on how they can be an argument to addMarker
export interface Mappable {
  location: {
    lat: number,
    lng: number
  },
  markerContent(): string,
  // as soon as we add this, we will see 2 errors pop up in index.ts
  // because this property is not there in both User and Company class
  // this is fine but it would have been better had we seen this error in 
  // both the classes 2, as the change would be required in these classes 
  // only
  // For this we will use the implements clause
  color: string
}

export class CustomMap {
  // hiding functionality by making googleMap object private
  // so that other functions of google maps api can't be called which may break the code
  private googleMap: google.maps.Map

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }

  // classes have dual behaviour in TS. Can be used to create a new instances or used as a type.
  // // now if we add a similar function for company, then this would lead to repititive code
  // addUserMarker(user: User): void {
  //   const { lat, lng } = user.location
  //   // it will show an error if we try to access any other property in user.location 
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat,
  //       lng
  //     }
  //   })
  // }

  // this is option 2 we specify all possible types that can be there
  // addMarker(mappable: User | Company): void {
  // this is not the ideal design. What if we have 20 different classes that we would
  // want to show on the map. We would need to import all these classes and have them
  // in or. Also, rather than having direct dependencies to all these classes
  // It's better that all other classes depend on the customMap class.
  // That is satisfy all constraints of mappable interface

  // Option 3: Best Solution => create an interface Mappable, that is a gatekeeper to the addMarker function
  // All classes like User, Company must satisfy interface 'Mappable' to work with
  // CustomMap's addMarker function
  // If we have a new requirement tomorrow, we can just update the interface and expect all different classes to 
  // follow that rule.
  addMarker(mappable: Mappable): void {
    const { lat, lng } = mappable.location
    // it will show an error if we try to access any other property in user.location 
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat,
        lng
      }
    })
    marker.addListener('click', () => {
      const infowindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      })
      infowindow.open(this.googleMap, marker)
    })
  }
}