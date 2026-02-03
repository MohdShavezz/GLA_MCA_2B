// Object
let userDetails={
  firstname:"John",
  lastname:"doe",
  hobbies:["cricket","football","hockey"],
  contact:{
    phone:{
      phoneNumber:"998989898",
      countryCode:"+91"
    }
  },
  greet(){
    console.log(`Hello ${this.firstname} ${this.lastname}`)
  }
}
// delete userDetails.firstname
// userDetails.greet()

// let userDetails2={...userDetails}
// userDetails2.firstname='undatedname' //1st layer workes
// userDetails2.contact.phoneNumber='999999'

//deep copy
let userDetails2=JSON.parse(JSON.stringify(userDetails))
userDetails2.contact.phoneNumber='999999'

console.log(userDetails,userDetails2)

// Object.seal():
// Object.seal() is a method that seals an object, preventing the addition or deletion of properties, 
// while allowing the modification of existing properties.
// console.log(userDetails.isSealed(person)); // Output: false

// Object.freeze():
// Object.freeze() is a method that freezes an object, making it completely immutable.
// Frozen objects are read-only, and no modifications, additions, or deletions of properties are allowed.
// Object.isFrozen(userDetails) // false
// let obj=Object.freeze(userDetails) 
// obj.firstname='change' // not allowed