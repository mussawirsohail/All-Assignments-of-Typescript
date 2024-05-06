// task 6:Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white space 
// Person's name with various whitespace characters
let personName: string = "\t Albert  \n Einstein"
console.log("name with white space" , personName)
let white:string = personName.trim()
console.log("name without white space", white)
