let x = 1;
let y = 2;
let res1 = (x+y)*4;
console.log(res1);
console.log(typeof res1); 
let res2 = "true"+y;
console.log(res2); // "true2"
console.log(typeof res2); // "string"
let res3 = x<y;// Допишіть код (використовувати змінні x і y)
console.log(res3); // true
console.log(typeof res3); // "boolean"
let res4 = x+y*"lab";// Допишіть код (використовувати змінні x і y)
console.log(res4); // NaN
console.log(typeof res4); // "number"

let result=prompt ("Enter enen and possitive number:");

while (isNaN(parseFloat(result))) {
    result= prompt("You have not entered a number.<br>Try again: ");
} 

if((result%2)==0 && result>0)
    {
        console.log("It`s correct  number.",result, "is even and positive number");
    }
    else if((result%2)!=0 && result<=0){
        console.log("It`s not correct  number.",result, "is not even and negetive number");
    }
    else if((result%2)!=0 && result>0)
        {
            console.log("It`s not correct  number.",result, "is not even");
        }
        else 
            {
                console.log("It`s not correct  number.",result, "is negetive");
            }
           
           
 result=prompt ("Enter a multiple of 7:");
 while (isNaN(parseFloat(result))) {
    result= prompt("You have not entered a number. \n Try again: ");
} 
if (result % 7 == 0) {
    console.log(result + " is a multiple of 7");
} else {
    console.log(result + " isn`t a multiple of 7");
}

let isAdult= prompt("Are you already 18?");
(isAdult > 18) ? console.log("You have reached the age of majority") :console.log("You are still too young");

let a = parseFloat(prompt("Enter first side"));
let b = parseFloat(prompt("Enter second side"));
let c = parseFloat(prompt("Enter third side"));
let smallOne, smallTwo, big;

if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a > 0 && b > 0 && c > 0) {
    if (a <= b || a <= c) {
        smallOne = a;
        if (b <= c) {
            smallTwo = b;
            big = c;
        } else {
            smallTwo = c;
            big = b;
        }
    } else  {
        big=a;
        smallTwo=b;
        smallOne=c;
    }
    if (smallOne + smallTwo > big) {
        let p = (a + b + c) / 2;
        let area = Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(3);
        console.log("Area: " + area);
        if (smallOne * smallOne + smallTwo * smallTwo === big * big) {
            console.log("Triangle is rectangular");
        } else {
            console.log("Triangle isn`t rectangular");
        }
    } else {
        console.log("These lines are not sides of a triangle");
    }
} else {
    console.log("Incorrect data");
}
let date= new Date();
let hour= date.getHours();
if(hour <=23 && hour<5)
{
    console.log("Good night!");
}
else if(hour>=5 && hour<=11)
    {
        console.log("Good morning!");
    }
    else if(hour>=11 && hour<17)
        {
            console.log("Good afternoon!");
        }
        else 
            {
                console.log("Good evening!");
            }

            switch(true) {
                case (hour <= 23 || hour < 5):
                    console.log("Good night!");
                    break;
                case (hour >= 5 && hour < 11):
                    console.log("Good morning!");
                    break;
                case (hour >= 11 && hour < 17):
                    console.log("Good afternoon!");
                    break;
                default:
                    console.log("Good evening!");
            }
            