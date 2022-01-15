// CODING CHALLENGE

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.


TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

let text = [];
const printForecast = function (arr) {
  arr.forEach((element) =>
    text.push(`... The teperature is ${element}ºC in ${arr.indexOf(element) + 1} days ...`)
  );
  text = text.join();
  console.log(text);
};

const test1 = [17, 21, 23];
const test2 = [12, 5, -5, 0, 4];

// printForecast(test1);
printForecast(test2);
