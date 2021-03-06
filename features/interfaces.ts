const oldCivic = {
  name: 'Civic',
  year: 2000,
  broken: true
}

const printVehicle = (vehicle: {
  name: string
  year: number
  broken: boolean
}): void => {
  const { name, year, broken } = vehicle
  console.log(`Name: ${name}
    Year: ${year}
    Broken? ${broken} 
  `)
}

printVehicle(oldCivic)

// problems with this: 
// 1. the annotation is really long
// 2. There might be other cars with a similar structure, hence this is not very reusable