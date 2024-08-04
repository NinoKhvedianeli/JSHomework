//task 1

let fruits = ["apple", "mango", "avocado", "kiwi"];

fruits.splice(fruits.length - 2, 1, "strawberry");

console.log(fruits);

// task 2

let info = "good day";
let newInfo = info.slice(5);

console.log(newInfo);

// task 3

function stringLength(string) {
  return string.length;
}

let exampleString = "Coding School";
console.log(stringLength(exampleString));

//task 4

let array = [5, 25, 89, 120, 36];

//  მასივის ბოლოში დაამატეთ ორი ელემენტი
array.push("javascript", "python");
console.log(array);

//  მასივის დასაწყისში კი დაამატეთ ელემენტი
array.unshift("html", "css");
console.log(array);

// გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში
console.log(array.length);

//  წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
array.shift();
array.pop();
console.log(array);

//task 5

let array2 = ["ფორთოხალი", "ბანანი", "კივი"];

//   გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში
console.log(array2.length);

//   მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
array2.push("ვაშლი", "ანანასი");
console.log(array2);
//   მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
array2.unshift("საზამთრო");
console.log(array2);
// გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;

console.log(array2.length);

//  მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
array2.splice(2, 0, "მანგო");
console.log(array2);
//  წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;

array2.shift();
array2.pop();
console.log(array2);
//   გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;

console.log(array2.length);

//task 6

let array3 = [1, 2, 3, 4, 5];

array3.splice(3, 0, "a", "b", "c");

console.log(array3);

// task 7

let array7 = [15, 100, 25, 10, 36];

let index = array7.indexOf(10);

if (index !== -1) {
  array7.splice(index, 1);
}

console.log(array7);

//task 8

let array8 = [1, 2, 3, 4, 5];

let index1 = array8.indexOf(3);

array8.splice(index1, 1, "three");

console.log(array8);

//task 9
let array6 = [1, 2, 3, 4, 5];

let sum = 0;

array6.forEach((number) => {
  sum += number;
});
console.log(sum);

// task 10

let array4 = [14, 150, "css", null, "javascript", 25];

let array5 = array4.map((element) => {
  if (typeof element === "number") {
    return element * element;
  } else if (typeof element === "string") {
    return element.toUpperCase();
  } else {
    return element;
  }
});

console.log(array5);

// task 11

const correctAnswer = "tbilisi";

let userAnswer = prompt("What is the capital of Georgia?");

userAnswer = userAnswer.toLowerCase();

if (userAnswer === correctAnswer) {
  console.log("სწორია");
} else {
  console.log("არასწორია");
}

//task 12

let array9 = [12, 25, 3, 6, 8, 14, 7, 23];

let array10 = array9.map((element) => element / 3);

console.log(array10);

//task 13

let array11 = ["hello1", 14, 24, "hello2"];

let numbersArray = array11.filter((element) => typeof element === "number");

console.log(numbersArray);

//task 14

let languages = ["html", "css", "javascript", "python", "php"];

let filteredLanguages = languages.filter((word) => word.length > 3);

console.log(filteredLanguages);

// Task 15

let words = ["Madrid", "rome", "Milan", "berlin"];

let filteredWords = words.filter((word) => /m/i.test(word));

console.log(filteredWords);

// task 16


function checkLink(url) {
    
    if (url.includes("https://")) {
        return "კი მოიცავს";
    } else {
        return "არა, არ მოიცავს";
    }
}

let link = "https://google.com";
console.log(checkLink(link));

//task 17

let array12 = [-1, -2, -3, 4];


let evenNumber = array12.some(number => number > 0);

console.log(evenNumber);

// task 18

let str = '12345';

let sum1 = str.split('').map(char => parseInt(char, 10)).reduce((acc, num) => acc + num, 0);

console.log(sum1); 

// task 19

let numbers = [15, 27, -60, 903, 744, -35];


let sum3 = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum3);

// task 20

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let array13 = arr1.concat(arr2, arr3);

console.log(array13);


