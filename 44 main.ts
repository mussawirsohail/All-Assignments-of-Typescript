// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function call provides, 
//  and it should print a summary of the sandwich that is being ordered. Call the function three times,
//   using a different number of arguments each time.

function Sandwiches(...items:string[]){
console.log(`Sandwiches order: ${items}`)
}
Sandwiches("club sandwich", " Cheese sandwiches")
Sandwiches("beef Sandwich", " Chicken sandwich", " Fish sandwich")
Sandwiches("lattice sandwich", " Tomato Sandwich", " Zinger Sandwich")





