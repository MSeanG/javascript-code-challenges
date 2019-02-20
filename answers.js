// Version 1
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var oddNumbers = [];

numbers.forEach(function (number) {
    if ((number % 2) !== 0) {
        oddNumbers.push(number);
    }
    return oddNumbers;
});

console.log(oddNumbers);



// Version 2, after a bit of refactoring and wasn't sure if "forEach" was considered looping
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.reduce(function (array, number){
    if((number % 2) == 1) {
        array.push(number);
    }
    return array;
},[]);
