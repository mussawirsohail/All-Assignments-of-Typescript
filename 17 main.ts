// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

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
console.log(" I can invites only two peoples")

while( guest.length > 2){
    const removed_guest = guest.pop()
    console.log(
        `Sorry ${removed_guest} I cannot invite you to the Dinner`
    )
}

for(let numeber of guest){
    console.log(`${numeber}, You are still invited`)
}


guest.pop()
guest.pop()
console.log(guest)











