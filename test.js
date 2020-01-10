let home = {
    theme: 'blue',
    addressInfo: {
      street: null,
      number: null,
      city: null,
      country: null
    },
  }

//   console.log(home)

let newObj = Object.assign({}, home.addressInfo, {city: 'NYC'})

// console.log(newObj)

console.log({...home})