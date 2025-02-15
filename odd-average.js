/**
 * Create a function takes an array as parameter
 * give the average of the odd numbers in the array
 */

function oddAverage(numbers) {
    //console.log(numbers); //i am check string show my function

    const odds = [];
    //why i am use (for of)
    for (const number of numbers) {
        if (number % 2 === 1) {
            //console.log(number);
            odds.push(number);
        }
    }
    //odd is the array that contains only the odd numbers
    //console.log(odds);
    let sum = 0 ;
    for ( const number of odds){
        sum = sum + number;

    }
    const length = odds.length
    console.log(sum , length);
    const avg = (sum / length);
    return avg;
     

    
}
const numbers = [23, 45, 75, 33, 44, 66, 88, 5, 22, 2, 9, 7,111];
const avg = oddAverage(numbers);
console.log("average of the odd numbers is:", avg);
