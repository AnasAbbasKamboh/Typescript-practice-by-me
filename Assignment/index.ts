//Batch 1 All Assignments in One File


/**Install [Node.js](https://nodejs.org/en/), [TypeScript](https://www.typescriptlang.org/download)  and [VS Code](https://code.visualstudio.com/) on your computer. ;-p */ 



/**Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, 
 would you like to learn some Python today?”  */
console.log("Task 2:")
const personName: string = "Basit";
console.log(`Hello ${personName}`)
console.log("<----Finished---->")

/**Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.  */
console.log("Task 3:")
const personNameTwo: string = "abdul basit";
console.log("toLowerCase=>",personNameTwo.toLowerCase())
console.log("toUpperCase=>",personNameTwo.toUpperCase())
console.log("toTitlecase=>",personNameTwo.split(" ").map((l: string) => l[0].toUpperCase() + l.substr(1)).join(" "))
console.log("<----Finished---->")

/**Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the 
 following, including the quotation marks: 
  
 Albert Einstein once said, “A person who never made a mistake never tried anything new.”  */
console.log("Task 4:")
console.log(`Albert Einstein once said, "If you can't explain it simply, you don't understand it well enough."`)
console.log("<----Finished---->")

/**Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.  */
console.log("Task 5:")
const famous_person: string = "Albert Einstein";
const message: string = "It's not that I'm so smart, it's just that I stay with problems longer."
console.log(`${famous_person} once said, "${message}"`)
console.log("<----Finished---->")

/** Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each 
 character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces. */
console.log("Task 6:")
const strippingNames: string = `\tAlbert\nEinstein\t`;
console.log(strippingNames.trim())
console.log("<----Finished---->")

/**Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.   */
console.log("Task 7:")
console.log("Addition=>",4+4)
console.log("Subtraction=>",10-2)
console.log("Multiplication=>",2*4)
console.log("Division=>",16/2)
console.log("<----Finished---->")

/**You should create four lines that look like this: 
  
 ___________________________________________ 
  
 console.log(5 + 3) 
  
 ___________________________________________ 
  
 Your output should simply be four lines with the number 8 appearing once on each line.  */
console.log("Task 8:")
console.log("______________")
console.log(5 + 3)
console.log("______________")
console.log("<----Finished---->")

/**Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message. */
console.log("Task 9:")
const fvtNumberOne: number = 18;
console.log(`My Favorite number is: ${fvtNumberOne}`)
console.log("<----Finished---->")

/**Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write 
 because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence 
 describing what the program does.  */
console.log("Task 10:")
const fvtNumber: number = 18; // a variable created in the memory and 18 stored in it as its value
console.log(`My Favorite number is: ${fvtNumber}`) // this message will be displayed in the console
console.log("<----Finished---->")

/**Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.  */
console.log("Task 11:")
const namesOne:Array<string> = ["Ali","Ahmad","Abdul"]
for(let i:number = 0; i < namesOne.length; i++){
    console.log(namesOne[i])
}
console.log("<----Finished---->")

/**Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message 
 should be the same, but each message should be personalized with the person’s name.  */
console.log("Task 12:")
const names:Array<string> = ["Ali","Ahmad","Abdul"]
for(let i:number = 0; i < names.length; i++){
    console.log(`Hello ${names[i]}`)
}
console.log("<----Finished---->")

/**Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list 
 to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”  */
console.log("Task 13:")
const transport:Array<string> = ["Honda 125","Range Rover"]
for(let i:number = 0; i < transport.length; i++){
    console.log(`I would like to own a ${transport[i]}`)
}
console.log("<----Finished---->")

/**Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to 
 invite to dinner. Then use your list to print a message to each person, inviting them to dinner.  */
console.log("Task 14:")
const guestsListOne:Array<string> = ["Imran Khan","Shahid Afridi","Virat Kohli","Babar Azam"]
for(let i:number = 0; i < guestsListOne.length; i++){
    console.log(`${guestsListOne[i]} Sir, I would like to invite you on a dinner.`)
}
console.log("<----Finished---->")

/**Changing Guest List: You just heard that one of your guests can’t make the 
 dinner, so you need to send out a new set of invitations. You’ll have to think of 
 someone else to invite. 
  
 • Start with your program from Exercise 14. Add a print statement at the 
 end of your program stating the name of the guest who can’t make it. 
  
 • Modify your list, replacing the name of the guest who can’t make it with 
 the name of the new person you are inviting. 
  
 • Print a second set of invitation messages, one for each person who is still 
 in your list.  */
console.log("Task 15:")
const guestsListTwo:Array<string> = ["Imran Khan","Shahid Afridi","Virat Kohli","Babar Azam"]
for(let i:number = 0; i < guestsListTwo.length; i++){
    if(guestsListTwo[i] == "Virat Kohli"){
        console.log(`${guestsListTwo[i]} Sir, No worries if you are unable to attend.`)
        guestsListTwo[i] = "Misbah ul haq"
        console.log(`${guestsListTwo[i]}  Sir, I would like to invite you on a dinner.`)
    }else{
        console.log(`${guestsListTwo[i]} Sir, I would like to invite you on a dinner.`)
    }
}
console.log(`Total guestsList: ${guestsListTwo.length}`)
console.log("<----Finished---->")

/**More Guests: You just found a bigger dinner table, so now more space is 
 available. Think of three more guests to invite to dinner. 
  
 • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a 
 bigger dinner table. 
  
 • Add one new guest to the beginning of your array. 
  
 • Add one new guest to the middle of your array. 
 • Use append() to add one new guest to the end of your list. 
 • Print a new set of invitation messages, one for each person in your list.  */
console.log("Task 16:")
const guestListFour:Array<string> = ["Imran Khan","Shahid Afridi","Virat Kohli","Babar Azam"]
guestListFour.push("Nawaz Sharif")
guestListFour.unshift("Shoaib Malik")
guestListFour.splice(guestListFour.length/2, 0, "Shahrukh Khan");
console.log("Sir I got a bigger dinner table I invited 3 more personalities")
for(let i:number = 0; i < guestListFour.length; i++){
    if(guestListFour[i] == "Virat Kohli"){
        console.log(`${guestListFour[i]} Sir, No worries if you are unable to attend.`)
        guestListFour[i] = "Misbah ul haq"
        console.log(`${guestListFour[i]}  Sir, I would like to invite you on a dinner.`)
    }else{
        console.log(`${guestListFour[i]} Sir, I would like to invite you on a dinner.`)
    }
}
console.log(`Total guestsList: ${guestListFour.length}`)
console.log("<----Finished---->")

/**Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests. 
  
 • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner. 
  
 • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print 
 a message to that person letting them know you’re sorry you can’t invite them to dinner. 
  
 • Print a message to each of the two people still on your list, letting them know they’re still invited. 
  
 • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end 
 of your program.  */
console.log("Task 17:")
let guestsListThree:Array<string> = ["Imran Khan","Shahid Afridi","Virat Kohli","Babar Azam"]
console.log("Sorry Guests I have just capacity of 2 guest only so i have to reduce my list")

let newArray = [...guestsListThree]

for(let i:number = 0; i < guestsListThree.length; i++){
      if(i <= 1){
        console.log(`${guestsListThree[i]}  Sir, I would like to invite you on a dinner.`)
    }
    else{
        console.log(`${guestsListThree[i]} Sorry sir I don't have space`)
        newArray.pop()
    }
}
guestsListThree = newArray
console.log(`Total guestsList: ${guestsListThree.length}`)
console.log(`Now Clearing the Array`)
guestsListThree.length = 0
console.log(`Total guestsList: ${guestsListThree.length}`)
console.log("<----Finished---->")

/** Seeing the World: Think of at least five places in the world you’d like to visit. 
  
 • Store the locations in a array. Make sure the array is not in alphabetical order. 
  
 • Print your array in its original order. 
  
 • Print your array in alphabetical order without modifying the actual list. 
  
 • Show that your array is still in its original order by printing it. 
  
 • Print your array in reverse alphabetical order without changing the order of the original list. 
  
 • Show that your array is still in its original order by printing it again. 
  
 • Reverse the order of your list. Print the array to show that its 
 order has changed. 
  
 • Reverse the order of your list again. Print the list to show it’s back to its original order. 
  
 • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed. 
  
 • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.  */
console.log("Task 18:")
const locations:Array<string> = ["Canada","USA","Brazil","Russia","UK"]
console.log("array is not in alphabetical order",locations)
const clonedArrayForAlphabeticalSort:Array<string> = [...locations]
const sortedArrayAlphabetical:Array<string> = clonedArrayForAlphabeticalSort.sort()
console.log("alphabetical order sorted",sortedArrayAlphabetical)
console.log("array in its original order",locations)
const clonedArrayForReverseAlphabeticalSort:Array<string> = [...locations]
const sortedArrayReverseAlphabetical:Array<string> = clonedArrayForReverseAlphabeticalSort.sort((a, b) => a > b ? -1 : 1)
console.log("reverse alphabetical order sorted",sortedArrayReverseAlphabetical)
console.log("array in its original order",locations)
console.log("<----Finished---->")

/**Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number 
 of people you are inviting to dinner.  */
console.log("Task 19:")
let finalGuestsList:Array<string> = [...guestsListOne,...guestsListTwo,...guestsListThree,...guestListFour].filter((value, index, self) => self.indexOf(value) === index);
console.log("Final Guests who are invited",finalGuestsList)
console.log("<----Finished---->")

/**Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything 
 else you’d like. Write a program that creates a list containing these items.  */
console.log("Task 20:")
const addThingsToArrayOne = (...a:any) =>{
let thingsArray:Array<string> = a
console.log("ThingsArray =>",thingsArray)
}
addThingsToArrayOne("Mountains", "rivers","countries","cities")
console.log("<----Finished---->")


/**They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.  */
console.log("Task 21:")
const addThingsToArray = (...a:any) =>{
let thingsArrayTwo:Array<string> = a
const thingsObject: { [key: string]: string } = {};
for (let i = 0; i < thingsArrayTwo.length; i++){
    let thing = thingsArrayTwo[i]
    let value = thingsArrayTwo[i]
    thingsObject[thing] = value
}
console.log("thingsObject =>",thingsObject)
}
addThingsToArray("Mountains", "rivers","countries","cities")
console.log("<----Finished---->")


/** Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs 
 to produce an index error. Make sure you correct the error before closing the program.  */
console.log("Task 22:")
const cars:Array<string> = ["Buggati","Ferrari","RangRover"]
let indexToFind:number = 3
console.log("array index error",cars[indexToFind])
indexToFind = 2
console.log("Corrected array index error",cars[indexToFind])
console.log("<----Finished---->")


/**Conditional Tests: Write a series of conditional tests. Print a statement 
 describing each test and your prediction for the results of each test. Your code 
 should look something like this: 
  
 let car = 'subaru'; 
  
 console.log("Is car == 'subaru'? I predict True.") 
  
 console.log(car == 'subaru') 
  
 • Look closely at your results, and make sure you understand why each line evaluates to True or False. 
  
 • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.  */
console.log("Task 23:")
let car:string = "subaru"
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

let bike:string = "honda70"
console.log("Is bike == 'honda70'? I predict True.")
console.log(bike == 'honda70')

let laptop:string = "macbook"
console.log("Is laptop == 'macbook'? I predict True.")
console.log(laptop == 'macbook')

let phone:string = "iphone"
console.log("Is phone == 'iphone'? I predict True.")
console.log(phone == 'iphone')

let cycle:string = "phoneix"
console.log("Is cycle == 'phoneix'? I predict True.")
console.log(cycle == 'phoneix')

let myName:string = "Dawood"
console.log("Is myName == 'Ali'? I predict False.")
console.log(myName == 'Ali')

let myAge:number = 26
console.log("Is myAge == 28? I predict False.")
console.log(myAge == 28)

let isAdmin:string = "No" 
console.log("Is isAdmin == 'Yes'? I predict False.")
console.log(isAdmin == "Yes")

let myFavouriteColor:string = "Black" 
console.log("Is myFavouriteColor == 'Green'? I predict False.")
console.log(myFavouriteColor == "Green")

let myFavouriteFood:string = "Biryani" 
console.log("Is myFavouriteFood == 'Shawarma'? I predict False.")
console.log(myFavouriteFood == "Shawarma")

console.log("<----Finished---->")


/**More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following: 
  
 • Tests for equality and inequality with strings 
  
 • Tests using the lower case function 
  
 • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to 
  
 • Tests using "and" and "or" operators 
  
 • Test whether an item is in a array 
  
 • Test whether an item is not in a array  */
console.log("Task 24:")
let num:number = 1
console.log("Value of num == 2",num == 2)
let numTwo:number = 1
console.log("Value of num != 1",numTwo != 1)
let myNameCheck:string = "Dawood"
console.log("lower case string",myNameCheck == "Dawood")
let num1:number = 10;
let num2:number = 5
console.log(">=&&||",num1 >= 5 && num1 <= 5 || num2 >= 5 && num2 <= 5)
let myNewArrayOne:Array<number> = [1,2,5,6]
let numberToCheck:number = 5;
let isNumberAvailable:boolean = false
for(let i:number = 0; i < myNewArrayOne.length; i++){
    if(myNewArrayOne[i] == numberToCheck){
        isNumberAvailable = true
        break;
    }
}
console.log("Check for the number available in the array: ",isNumberAvailable)
console.log("<----Finished---->")

/**Alien Colors #1: Imagine an alien was just shot down in a game. Create a 
 variable called alien_color and assign it a value of 'green', 'yellow', or 'red'. 
  
 • Write an if statement to test whether the alien’s color is green. If it is, print 
 a message that the player just earned 5 points. 
  
 • Write one version of this program that passes the if test and another that 
 fails. (The version that fails will have no output.)  */
console.log("Task 25:")
const alien_color:string = "green"
const colorCheckerOne = (clr:string) =>{
    if(alien_color == clr){
    console.log("You earned 5 points")
        }
    else{
    console.log("no OutPut")
        }
}
colorCheckerOne("green")
colorCheckerOne("red")
console.log("<----Finished---->")

/**Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and 
 write an if-else chain. 
  
 • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien. 
  
 • If the alien’s color isn’t green, print a statement that the player just earned 10 points. 
  
 • Write one version of this program that runs the if block and another that runs the else block.  */
console.log("Task 26:")
const alien_color_Two:string = "green"
const colorCheckerTwo = (clr:string) =>{
    if(clr == alien_color_Two){
    console.log("You earned 5 points")
        }
   else if(clr ==  "red"){
    console.log("You earned 10 points")
        }
    else{
    console.log("no OutPut")
        }
}
colorCheckerTwo("green")
colorCheckerTwo("red")
colorCheckerTwo("blue")
console.log("<----Finished---->")

/**Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain. 
  
 • If the alien is green, print a message that the player earned 5 points. 
  
 • If the alien is yellow, print a message that the player earned 10 points. 
  
 • If the alien is red, print a message that the player earned 15 points. 
  
 • Write three versions of this program, making sure each message is printed for the appropriate color alien.  */
console.log("Task 27:")
const alien_color_Three:string = "green"
const colorCheckerThree = (clr:string) =>{
    if(clr == alien_color_Three){
    console.log("You earned 5 points")
        }
   else if(clr ==  "yellow"){
    console.log("You earned 10 points")
        }
   else if(clr ==  "red"){
    console.log("You earned 15 points")
        }
    else{
    console.log("no OutPut")
        }
}
colorCheckerThree("green")
colorCheckerThree("yellow")
colorCheckerThree("red")
console.log("<----Finished---->")


/** Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then: 
  
 • If the person is less than 2 years old, print a message that the person is a baby. 
  
 • If the person is at least 2 years old but less than 4, print a message that the person is a toddler. 
  
 • If the person is at least 4 years old but less than 13, print a message that the person is a kid. 
  
 • If the person is at least 13 years old but less than 20, print a message that the person is a teenager. 
  
 • If the person is at least 20 years old but less than 65, print a message that the person is an adult. 
  
 • If the person is age 65 or older, print a message that the person is an elder.  */
console.log("Task 28:")
const personAgeCalculator = (age:number) =>{
    if(age < 2){
    console.log("person is a baby")
        }
    else if(age >= 2 && age < 4){
    console.log("person is a toddler")
        }
    else if(age >= 4 && age < 13){
    console.log("person is a kid")
        }
    else if(age >= 13 && age < 20){
    console.log("person is a teenager")
        }    
   else if(age >= 20 && age < 65){
    console.log("person is a adult")
        }
   else if(age >= 65){
    console.log("person is a elder")
        }    
    else{
    console.log("no OutPut")
        }
}
personAgeCalculator(1)
personAgeCalculator(3)
personAgeCalculator(7)
personAgeCalculator(15)
personAgeCalculator(22)
personAgeCalculator(70)
console.log("<----Finished---->")


/**Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array. 
  
 • Make a array of your three favorite fruits and call it favorite_fruits. 
  
 • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, 
 such as You really like bananas!  */
console.log("Task 29:")
const favorite_fruits:Array<string> = ["apple", "orange", "mango","bananas","peach"]
for(let i:number = 0; i < favorite_fruits.length; i++){

    if(favorite_fruits[i] == "orange"){
        console.log(`${favorite_fruits[i]} is in my favorite fruits list`)
    }
    else if(favorite_fruits[i] == "bananas"){
        console.log(`${favorite_fruits[i]} is in my favorite fruits list`)
    }
    else if(favorite_fruits[i] == "apple"){
        console.log(`${favorite_fruits[i]} is in my favorite fruits list`)
    }
    else if(favorite_fruits[i] == "mango"){
        console.log(`${favorite_fruits[i]} is in my favorite fruits list`)
    }
    else{
        console.log("I d'nt like this fruit")
    }

}
console.log("<----Finished---->")

/**Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user 
 after they log in to a website. Loop through the array, and print a greeting to each user: 
  
 • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report? 
  
 • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.  */
console.log("Task 30:")
const userOnWebsite:Array<string> = ["Ahmad", "Ali", "Abdullah","Dawood","Akbar"]
for(let i:number = 0; i < userOnWebsite.length; i++){

    if(userOnWebsite[i] == "Ahmad"){
        console.log(`Hello ${userOnWebsite[i]}, thank you for logging in again`)
    }
    else if(userOnWebsite[i] == "Dawood"){
        console.log(`Hello admin ${userOnWebsite[i]} thank you for logging in`)
    }
    else if(userOnWebsite[i] == "Ali"){
        console.log(`Hello ${userOnWebsite[i]}, thank you for logging in again`)
    }
    else if(userOnWebsite[i] == "Abdullah"){
        console.log(`Hello ${userOnWebsite[i]}, thank you for logging in again`)
    }
    else if(userOnWebsite[i] == "Akbar"){
        console.log(`Hello ${userOnWebsite[i]}, thank you for logging in again`)
    }
    else{
        console.log("No user exists with that name")
    }

}
console.log("<----Finished---->")


/**No Users: Add an if test to Exercise 28 to make sure the list of users is not empty. 
  
 • If the list is empty, print the message We need to find some users! 
  
 • Remove all of the usernames from your array, and make sure the correct message is printed.  */
console.log("Task 31:")
const userOnWebsiteTwo:Array<string> = ["Ahmad", "Ali", "Abdullah","Dawood","Akbar"]
    if(userOnWebsite.length == 0){
        console.log("We need to find some users!")
    }
    else{
        while (userOnWebsite.length > 0) {
            userOnWebsite.pop()
          }
         console.log("No users found!",userOnWebsite.length)
    }
console.log("<----Finished---->")

/**Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username. 
  
 • Make a list of five or more usernames called current_users. 
  
 • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list. 
  
 • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a 
 new username. If a username has not been used, print a message saying that the username is available. 
  
 • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.  */
console.log("Task 32:")
const current_users:Array<string> = ["Bob11", "John12", "william13","Emily14","Martin15"]
const new_users:Array<string> = ["Andy11","Robert12","John12","Emmy13","Scot12"]
const findingUserNames = (user:string) =>{
    const findingUserIndex = current_users.indexOf(user)
    if(findingUserIndex != -1){
     return `${user} needs a new username because its already exist`
    }
    else{
     return `${user} the username is available`
    }
}

for(let i=0;i < new_users.length;i++){
    console.log(findingUserNames(new_users[i]))
}
console.log("<----Finished---->")

/**Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3. 
  
 • Store the numbers 1 through 9 in a array. 
  
 • Loop through the array. 
  
 • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 
 7th 8th 9th", and each result should be on a separate line.  */
console.log("Task 33:")
const ordinalNumbers:Array<number> = [1,2,3,4,5,6,7,8,9]
for(let i=0;i < ordinalNumbers.length;i++){
    if(ordinalNumbers[i] == 1 || ordinalNumbers[i] == 2 || ordinalNumbers[i] == 3){
    }
    else{
        console.log(`${ordinalNumbers[i]}th`)
    }
}
console.log("<----Finished---->")

/**Pizzas: Think of at least three kinds of your favorite pizza. Store these 
 pizza names in a array, and then use a for loop to print the name of each pizza. 
  
 • Modify your for loop to print a sentence using the name of the pizza 
 instead of printing just the name of the pizza. For each pizza you should 
 have one line of output containing a simple statement like I like pepperoni 
 pizza. 
  
 • Add a line at the end of your program, outside the for loop, that states 
 how much you like pizza. The output should consist of three or more lines 
 about the kinds of pizza you like and then an additional sentence, such as 
 I really love pizza!  */
console.log("Task 34:")
const pizzas:Array<string> = ["tandori","pepporani","tikka"]
for(let i=0;i < pizzas.length;i++){
  console.log(`I Like ${pizzas[i]} pizza`)
}
console.log(`Pizzas are my favorite meal \nI really like to eat them \nI really love pizza!`)
console.log("<----Finished---->")

/**Animals: Think of at least three different animals that have a common characteristic. 
 Store the names of these animals in a list, and then use a for loop to 
 print out the name of each animal. 
 • Modify your program to print a statement about each animal, such as 
 A dog would make a great pet. 
 • Add a line at the end of your program stating what these animals have in 
 common. You could print a sentence such as Any of these animals would 
 make a great pet!  */
console.log("Task 35:")
const animals:Array<string> = ["dog","cat","rabbit"]
for(let i=0;i < animals.length;i++){
    console.log(`A ${animals[i]} would make a great pet.`)
}
console.log("These animals would make a great pet!")
console.log("<----Finished---->")

/**T-Shirt: Write a function called make_shirt() that accepts a size and the 
 text of a message that should be printed on the shirt. The function should print 
 a sentence summarizing the size of the shirt and the message printed on it. 
 Call the function.  */
console.log("Task 36:")
const makingTShirt = (size:string,textToPrint:string) =>{
return `Size: ${size}, TextToPrint on it: ${textToPrint}`
}
console.log(makingTShirt("medium","Pakistan Zindabad"))
console.log("<----Finished---->")

/**Large Shirts: Modify the make_shirt() function so that shirts are large 
 by default with a message that reads I love TypeScript. Make a large shirt and a 
 medium shirt with the default message, and a shirt of any size with a different 
 message.  */
console.log("Task 37:")
const makingTShirtTwo = (textToPrint?:string,size:string = "large",) =>{
return `Size: ${size}, TextToPrint on it: ${textToPrint}`
}
console.log(makingTShirtTwo("I love TypeScript"))
console.log("<----Finished---->")

/**Cities: Write a function called describe_city() that accepts the name of 
 a city and its country. The function should print a simple sentence, such as 
 Karachi is in Pakistan. Give the parameter for the country a default value. 
 Call your function for three different cities, at least one of which is not in the 
 default country.  */
console.log("Task 38:")
const describe_city = (city?:string,country:string = "Pakistan",) =>{
return `${city} is in ${country}`
}
console.log(describe_city("Karachi"))
console.log(describe_city("Faisalabad"))
console.log(describe_city("Mumbai"))
console.log("<----Finished---->")

/**City Names: Write a function called city_country() that takes in the name 
 of a city and its country. The function should return a string formatted like this: 
  
 "Lahore, Pakistan" 
  
 Call your function with at least three city-country pairs, and print the value 
 that’s returned.  */
console.log("Task 39:")
const city_country = (city?:string,country:string = "Pakistan",) =>{
return `"${city}, ${country}"`
}
console.log(city_country("Karachi","Pakistan"))
console.log(city_country("Faisalabad","Pakistan"))
console.log(city_country("Mumbai","India"))
console.log("<----Finished---->")

/**Album: Write a function called make_album() that builds a Object 
 describing a music album. The function should take in an artist name and an 
 album title, and it should return a Object containing these two pieces of 
 information. Use the function to make three dictionaries representing different 
 albums. Print each return value to show that Objects are storing the 
 album information correctly. 
 Add an optional parameter to make_album() that allows you to store the 
 number of tracks on an album. If the calling line includes a value for the number 
 of tracks, add that value to the album’s Object. Make at least one new 
 function call that includes the number of tracks on an album.  */
console.log("Task 40:")
const make_album = (artist:string,albumName:string,track:number = 1) =>{
return {
    artist,
    albumName,
    track
}
}
console.log(make_album("Atif Aslam","Doorie"))
console.log(make_album("Arijit Singh","Tum hi ho"))
console.log(make_album("Jubin Nautiyal","Zindagi tu bta"))
console.log("<----Finished---->")

/**Magicians: Make a array of magician’s names. Pass the array to a function 
 called show_magicians(), which prints the name of each magician in the array.  */
console.log("Task 41:")
const magicians:Array<string> = ["Albert","Michael","Steve"];
const show_magicians = (arr:Array<string>) =>{
for(let i = 0; i < arr.length; i++){
 console.log(`Hello Mr, ${arr[i]} Magician`)
}
}
show_magicians(magicians)
console.log("<----Finished---->")

/**Great Magicians: Start with a copy of your program from Exercise 39. 
 Write a function called make_great() that modifies the array of magicians by adding 
 the phrase the Great to each magician’s name. Call show_magicians() to 
 see that the list has actually been modified. */
console.log("Task 42:")
const make_great = (arr:Array<string>) =>{
return arr.map((item)=>(`Great ${item}`))
}
show_magicians(make_great(magicians))
console.log("<----Finished---->")

/**Unchanged Magicians: Start with your work from Exercise 40. Call the 
 function make_great() with a copy of the array of magicians’ names. Because the 
 original array will be unchanged, return the new array and store it in a separate array. 
 Call show_magicians() with each array to show that you have one array of the original 
 names and one array with the Great added to each magician’s name.  */
console.log("Task 43:")
let copyArrayMagicians = [...magicians]
show_magicians(make_great(copyArrayMagicians))
console.log(magicians)
console.log("<----Finished---->")


/* Sandwiches: Write a function that accepts a array of items a person wants 
 on a sandwich. The function should have one parameter that collects as many 
 items as the function call provides, and it should print a summary of the sandwich 
 that is being ordered. Call the function three times, using a different number 
 of arguments each time. */
console.log("Task 44:")
const prepareSandwiches = (...items:Array<string>) =>{
let summaryOfSandwich:any = {}  
let countOfDishes = 1
for(let i = 0; i < items.length; i++){
    summaryOfSandwich[`item ${countOfDishes}`] = items[i]
    countOfDishes = ++countOfDishes

}
return summaryOfSandwich
}
console.log(prepareSandwiches("sauce","corn","black pepper"))
console.log(prepareSandwiches("pickle","corn","capsicum"))
console.log(prepareSandwiches("green chilli","corn","lentils"))
console.log("<----Finished---->")

/*Cars: Write a function that stores information about a car in a Object. 
 The function should always receive a manufacturer and a model name. It 
 should then accept an arbitrary number of keyword arguments. Call the function 
 with the required information and two other name-value pairs, such as a 
 color or an optional feature.  
 Print the Object that’s returned to make sure all the information was 
 stored correctly.*/
console.log("Task 45:")
const storeInformationAboutCar = (manufacturer:string,model:string,color:string) =>{
return {
    manufacturer,
    model,
    color
}
}
console.log(storeInformationAboutCar("Nissan","GTR","Black"))
console.log("<----Finished---->")