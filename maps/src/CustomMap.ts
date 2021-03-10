// hiding functionality by making googleMap object private
// so that other functions of google maps api can't be called which may break the code
export class CustomMap {
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
}