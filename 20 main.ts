// Task 20: Think of something you could store in a array.
// For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. 
// Write a program that creates a list containing these items.
let mountains:string[]=["Everest", "Aconcagua", "Denali"," Kilimanjaro", "Elbrus", "Mount Vinson ","Carstensz" ,"Pyramid"]
let countries:string[]=["United States","Russia","china","Germany","Poland","italy","Dubai"]
let cities:string[]=["Berlin","Rome","karachi","Huston","Frankfurt","Paris","tokyo","London"]
let languages:string[] = ["English", "urdu", "Sindhi", "German", "Italian", "French"] 
let rivers: string [] = ["Nile River", "Amazon River", "Yangtze River", "Mississippi River", "Ob River"]

let allitems:string[] =[...cities,...countries,...languages,...mountains,...rivers]
console.log(allitems) 

