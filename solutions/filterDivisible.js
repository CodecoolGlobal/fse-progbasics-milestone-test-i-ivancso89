/*
Write the filterDivisible(numbers, divisor) function, that will get an array of numbers and a number.
Your task is to find the numbers in the array that are divisible with the provided number and return them in an array.

Tip
If none of the numbers are divisible by the given number, then return an empty array.
Be mindful of division by 0. If the given number is 0 then return null.
If the array is empty then it should return an empty array.
 */

function filterDivisible(numbers, divisor) {
    let filtered = []
    if (divisor === 0) {
        return null
    }
    if (numbers.length === 0) {
        return numbers
    }
    for (const number of numbers) {
        if (number % divisor === 0) {

            filtered.push(number)
        }

    }
    
    return filtered

}



module.exports = filterDivisible;
