// //First
// // console.log('hi');


// //Second
// // var userName:string = "Bhatii";
// // var userPhone:number = 22;
// // console.log(userName,userPhone)

// // var apple:number = 22;
// // var mango:number = 22;
// // var orange:number = 22;
// // let allfrutis = apple + mango + orange;
// // console.log(allfrutis)


// //Area of rectangle
// var length: number = 20
// var width: number = 20
// var areaofrectangle = length*width
// console.log( "Area Of Rectangle =", areaofrectangle)

// //Volume of Cube
// var area: number = 20
// var volumeofcube = area*area*area
// console.log( "Volume of Cube =", volumeofcube)

// //Check positive negative 
//  let apple:number = -1
//  if(apple>0){
//     console.log("positive")
//  }
//  if(apple<0){
//     console.log("negative")
//  }
//  if(apple==0){
//     console.log("equal")
//  }

//  //Check number even or odd 
//  let mango:number = 5
//  if(mango%2==0){
//     console.log("even")
//  }else{
//     console.log("odd")
//  }

//   //Check if person is eligible to vote
//   let person:number = 38
//   if(person>18){
//     console.log("Eligible to vote")
//   }else{
//     console.log("Not Eligible")
//   }


//   // answer of an expression
//   let express:number = ((10+5)*3-2)/(4%3)-7
//   console.log("answer is" ,express)

//program to convert celcius to Farenheit
let Celcius:number=78.9
let Fahrenheit:number =  (Celcius* 9/5) + 32;
console.log("Fahrenheit=",Fahrenheit)

//program to calculate 30 percent of a number
let value:number = 3
let percn:number = value/30*100
console.log("Percentage= ",percn)

//Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
let days:number = 27
let week:number=days/7
let day:number=days%7
console.log("week= ", Math.floor(week), "day = ", day)

// - Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
let price:number = 90
var discount:number = 0
if(price>100){
 discount=price/10*100
}else{
   discount=price/5*100
}
console.log("discount=", discount)

//Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
let age:number = 16
if(age<=12&&age>=0){
   console.log("Child")
}else if(age>=13&&age<=19){
   console.log("Teenager")
}else{
   console.log("Adult")
}

//Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
let weather:number = 2
if(weather<1){
   console.log("Wear Jackets Becasuse it is extremely cold outside")
}else if(weather>1&&weather<10){
   console.log("Wearm warm clothes becasue it is sold outside")
}else{
   console.log("wear Light Clothes")
}

//Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
let Givennumber:number = 25
if(Givennumber%3==0 && Givennumber%5==0){
   console.log("divisible by 3 & 5")
}else if (Givennumber%3==0){
   console.log("divisible by 3")
}else if (Givennumber%5==0){
   console.log("divisible by 5")
}else{
   console.log("NO divisible by both")
}

//Write a program that checks if the given year is leap year or not.
let year:number = 2020
if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
   console.log("It is a leap year")
}else{
   console.log("Not a leap year")
}

//Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
let Userday:number = 5
switch(Userday){
   case 1:
      console.log("Monday");
      break;
   case 2:
      console.log("Tuesday");
      break;
   case 3:
      console.log("Wednesday")
      break;
   case 4:
      console.log("Thursday")
      break;
   case 5:
      console.log("Friday")
      break;
   case 6:
      console.log("Saturday")
      break;
   case 7:
      console.log("Sunday")
      break;
   default:
      console.log("Are you comedy me?")                     
}

//Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax Where the tax amount will be calculated by the amount of bill.
let units:number=300
let priceofunit:number = 40
let totalbill:number = units * priceofunit
let tax:number = 0
if(units>=100&&units<200){
   tax=(13/100)*totalbill
   totalbill = totalbill + tax
   console.log(`${totalbill} is the bill after 13% tax`)
} else if (units>=200&&units<300){
   tax=(16/100)*totalbill
   totalbill = totalbill + tax
   console.log(`${totalbill} is the bill after 16% tax`)
}else if (units>=300&&units<400){
   tax=(18/100)*totalbill
   totalbill = totalbill + tax
   console.log(`${totalbill} is the bill after 18% tax`)
}else if (units>=400&&units<500){
   tax=(20/100)*totalbill
   totalbill = totalbill + tax
   console.log(`${totalbill} is the bill after 20% tax`)
}else{
   tax=(25/100)*totalbill
   totalbill = totalbill + tax
   console.log(`${totalbill} is the bill after 25% tax`)
}