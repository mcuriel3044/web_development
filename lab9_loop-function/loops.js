console.log("Milpa Curiel")
console.log ("====Example 1: for loop as a counter=====")
let i =  1;
for(i ; i < 5 ; i++){
    console.log(`iteration = ${i}`)
}

console.log ("====Example 2: for loop as  decrement counter=====")
// create a loop counter from 10 to 0 step 1
for(let n = 10; n>=0; n--){
    console.log(`interation = ${n}`);
}

console.log ("====Example 3: condition inside the loop=====")
//  check how many even numbers are in between -5 and 5
let counter = 0
for(let m = -5; m<=5; m++){
    console.log(`interation = ${m}`)
    if(m%2 ===0 && m!==0){
        counter++
    }
}
console.log(`There is/are ${counter} of even numbers}`)
console.log ("====Example 4: while loop as  a counter=====")
//display number to 4
let p = 0
while (p<=4){
    console.log(`interation = ${p}`)
    p++
}
console.log ("====Example 5: while loop application=====")
//guess number game
const SECRET = 8

let guessnumber = parseInt(prompt("Guess a  number  between  1 and 10"))
while(guessnumber !== SECRET){
        guessnumber = parseInt(prompt("Guess another  number  between  1 and 10"))
}
console.log(`Great! You guessed it! The number is ${SECRET}`)

console.log ("====Example 6: while loop application in a list=====")
let colors = ["magenta", "olive", "babyblue"]
let sizeofcolors = colors.length//returns 3
let index = 0
while(index<sizeofcolors){
    console.log(colors[index])
    index++
}
console.log ("====Example 7: while loop  to simulate a password log-in=====")
//terrminate the loop if passward fails in  three attempts
const password = "peterpan"
let userpassword = prompt("Enter a password")
let numberattempt = 0
while (userpassword !== password){
    numberattempt++
    if(numberattempt>2){
        console.log("Your account is locked")
        break
    }
    userpassword = prompt(`You have ${3-numberattempt} attempts left.  Enter a password again`)
}
console.log ("Have a good day")

console.log ("====Example 8: do-while loop to stiumte a withdraw from a bank account=====")
//user try to withdraw money from an account with balance of $1,000.
let withdraw = 0
let balance = 1000
do{
    withdraw = parseInt(prompt("How  much do you want to withdraw?"))
    if(withdraw<=balance){
        balance = balance - withdraw
        break
    }
    else{
        console.log("Insufficient amount, try again")
    }
}while(withdraw>balance)
console.log(`Your new balance is ${balance}`)

console.log("=====Exercise:  simulate a bank trasaction====")
//simulate the collection of a pin number of 4 digits
//ask the user to pick a transaction : view the balance, deposit, withdraw ---> flow control (if, else if, else)
// ask user if they want another transaction

console.log("Simulate the collection of a 4-digit pin")
const pin = 4564
let userpin = parseInt(prompt("Enter your pin"))
let  pinattempt = 0
while(userpin !== pin){
    pinattempt++
    if(pinattempt>2){
        console.log("Your account is locked")
        break
    }
    userpassword = prompt(`You have ${3-pinattempt} attempts left.  Enter a pin again`)
}
console.log ("What transaction do you want to do today")

