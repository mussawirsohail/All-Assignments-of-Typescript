// Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.
let magicians:string[]=["Mussawir", "Aadil", "Sameer", "Ali"]
function show_magicians( magicians:string[] ){
    magicians.forEach(
        (magician => {
            console.log(magician)
        }
    )
)}
show_magicians(magicians)
function make_great(magicians:string[]){
    magicians.forEach(
        (magician => {
            console.log(`The Great ${magician}`)
        })
    )
}
make_great(magicians)








