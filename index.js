// // excercise 1
// let address ={
// street: 'Adderly',
// city: 'Cape Town',
// zipcode: 7760
// };

// // console.log(address);

// function showAddress() {
//     console.log(address);
// }

// showAddress();

//excercise 2

// let blogpost = {
//   title: "Attack on titan",
//   body: "The Colonization of Wall maria VS Marly",
//   authorship: "Ahneaka",
//   views: 100000700,
//   comments:[ comment1 ={
//     authorship: "Ahneaka",
//     body: "steez",
//   }
// ],

//   isLive: true,
// };

// console.log(blogpost);

function createAddress(street,city,zipcode) {
  // console.log(blogpost);
  return {
    street, 
    city, 
    zipcode,
  }
};
 
const newAddress = createAddress('loop','cpt',7880);
console.log(newAddress);
const newAddress2 = createAddress('meedly', 'cpt', 1234);
console.log(newAddress2);

