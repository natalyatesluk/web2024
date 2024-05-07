console.log("Teslyuk Natalya");

let num;
let str;


num = 10;
str = "Hello";

console.log("Value of the first variable:", num);
document.write("Value of the first variable: ", num, "<br>")
console.log("Value of the second variable:", str);
document.write("Value of the second variable: ", str,"<br>")

str = num;

console.log("Value of the first variable after copying:", num);
document.write("Value of the first variable after copying: ", num,  "<br>")
console.log("Value of the second variable after copying:", str);
document.write("Value of the second variable after copying: ", str,"<br>")


let object = {
    "String": "Natalya",
    "Number": 18,
    "Boolean": true,
    "Undefined": undefined,
    "Null": null
};

console.log(object);

let isAdult= confirm("Are you already 18?");
console.log("isAdult: ",isAdult);

let name, surename, class_group, birth_year;



birth_year=2006;
console.log("Birth year: ",birth_year, typeof(birth_year));

let isMarried = false;
console.log("isMarried:", isMarried, typeof(isMarried));

name="Natalya"; 
console.log("Name:",name,typeof(name));

surename="Tesluyk";
console.log("Surename: ",surename,typeof(surename));

class_group="CS-321";
console.log("Class group: ",class_group, typeof(class_group));

let collaborate = null;
let phone;

console.log("collaborate: ",collaborate, typeof(collaborate));
console.log("phone: ",phone, typeof(phone));

let login=prompt("Login: ");
let email = prompt("Email: ");
let password = prompt("Password: ");

document.write("<br> Dear ", login,", your email is ", email, ", your password is ",password);


var secondsHour = 60 * 60;

var secondsDay = secondsHour * 24;


var daysMonth = 30;
var secondsMonth = secondsDay * daysMonth;

document.write("<br><br> Seconds in an hour: ", secondsHour);
document.write("<br> Seconds in a day: ", secondsDay);
document.write("<br> Seconds in a month (30 days): ", secondsMonth);

