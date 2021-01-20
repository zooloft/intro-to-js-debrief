

// 1. GenBuzz

let myNumber = 60;

if (isNaN(myNumber)) {
    console.log('This is not a number');
}

else if ((myNumber % 3 == 0) && (myNumber % 5 == 0)) {
    console.log("GenBuzz");
}

else if (myNumber % 3 == 0) {
    console.log("Gen");
}
else if (myNumber % 5 == 0) {
    console.log("Buzz");
}

else {
    console.log(`Your number is ${myNumber}`);
}


// 2. E-Commerce Item list

let inputItem = 'hat';
 
if (inputItem === 'shoes') {
  console.log('Shoes- $50');
} else if (inputItem === 'jeans'){
    console.log('Jeans- $25');

} else if (inputItem === 'hat'){
    console.log('Hat- $12');

} else if (inputItem === 'socks'){
    console.log('Socks- $2');

} else {
  console.log('Invalid item');
}

// 3. Print a random integer (whole number) between 50 and 100 to the console

let randomInteger = Math.floor(Math.random() * 50);
randomInteger +=50;
console.log(`Random Integer between 50 and 100: ${randomInteger}`);

