// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guest:string[] = ["Mudasir","Sameer","Ahmed"]
console.log(`${guest[2]} cant make it to the dinner`)
guest.pop()
console.log(guest)
guest.push("Muneeb")
guest.forEach((person:string)=> {
    console.log(`${person} would you like to join me on my dinner ?`)
})
console.log("i have found a bigger dinner table")
// Add name begning of the array 
guest.unshift("Arshaman")
console.log(guest)
// Add name middle of the array 
guest.splice(guest.length/2,0,"Sohail")
console.log(guest)
// Add name end of the array 
guest.push("Zaman")
console.log(guest)
guest.forEach((person:string) =>{
    console.log(`${person} you are invited to the dinner`)
} )










