// Cars: Write a function that stores information about a car in a Object.
//  The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs,
//  such as a color or an optional feature. 
//  Print the Object that’s returned to make sure all the information was stored correctly.

// let car = {
//     Manufacturer:"Toyota",
//     Model:2024
// opt
// }
function make_Car(manufacturer:string, Model:string, ...option:[any,string][]):object{
    let car ={manufacturer,Model};
    option.forEach(([key ,value])=>car[key]= [value])
    return car;
}
console.log(make_Car("Toyota","Camry",["color","black"],["year","2024"]))
console.log(make_Car("Honda","Civic",["color","white"],["sunroof","True"],))





