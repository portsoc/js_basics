"use strict";
/*
 * Solutions to the challenges.
 * Copy the content of this file and use to to replace
 * the content of index.js before rerunning the uhnit
 * test in the browser.
 */


/**
 * Uncomment the next three lines to
 * make the example test pass
 */
function example() {
  return true;
}


/**
 * Create an add function that accepts
 * two parameters and returns their sum.
 */
function add(a,b) {
  return a+b;
}


/**
 * Create a subtract function that accepts
 * two parameters and subtracts the second
 * parameter from the first.
 */
function subtract(a,b) {
  return a-b;
}


/**
 * Create an addArray function that accepts
 * one parameter, an array and returns
 * the sum of the values contained within it.
 */
function addArray(arr) {
  let total=0;
  for (const num of arr) {
    total += num;
  }
  return total;
}


/**
 * Create an avgArray function that accepts
 * one parameter, an array and
 * returns its average.
 */
function avgArray(arr) {
  if (arr.length == 0) {
    // a zero length array is a special case.
    return 0;
  }
  // for other cases, using the already
  // tested addArray function simplifies this 
  return addArray(arr) / arr.length;
}


/**
 * Create a function called compare that accepts
 * two arrays of numbers and compares the contents.
 * It should return true if the arrays are
 * identical and false otherwise.
 */
function compare(a, b) {
  if (a.length != b.length) {
    // if they're different lengths there must
    // be a difference somewhere, so we can
    // stop immediately!
    return false;
  }
  // compare a and b element by element and if any
  // of them don't match, stop immediately; 
  for (let i=0; i<a.length; i=i+1) {
    if (a[i] != b[i]) {
      return false;
    }
  }
  // if we get here, the arrays match.
  return true;
}


/**
 * Write a function "nArray" that takes a parameter
 * n and returns an array with n numbers. The numbers
 * in the array should increase from 1 to n.
 */
function nArray(n) {
  let result = [];
  for (let i=1; i<=n; i++) {
    result.push(i);
  }
  return result;
}


/**
 * Write a function "divisors" that takes takes two
 * parameters, an array of numbers and a divisor.
 * Return a new array containing ONLY the numbers
 * in the first array that are exactly divisible by
 * the second parameter.
 *
 */
function divisors(numArray, div) {
  let result = [];
  for (const num of numArray) {
    if (num % div == 0) {
      result.push(num);
    }
  }
  return result;
}

/**
 * Write a function 'multiples' that takes two
 * parameters n and m. Your function should insert
 * n numbers into an array. The numbers inserted
 * should increase from 1*m to n*m. Your function
 * should return the new array.
 */
function multiples(n, m) {
  let result = [];
  for (let i=1; i<=n; i++) {
    result.push(i*m);
  }
  return result;
}

/**
 * Create a function called larger that accepts
 * two numbers and returns the larger number.
 */
function larger(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

/**
 * Create a function called largest that accepts
 * an array of numbers and returns the largest
 * number in the array.
 */
function largest(arr) {
  let largest=0;
  for (const num of arr) {
    if (num > largest) {
      largest = num;
    }
  }
  return largest;
}
/**
 * Create a function addToAll that accepts an array
 * and a number as parameters. Assuming an array of
 * numbers is passed, return the same array with the
 * second parameter added to each number within the
 * array - such that ([1,2,3], 1) should return [2,3,4].
*/
function addToAll(arr, addMe) {
  let result = [];
  for (const num of arr) {
    result.push(num+addMe);
  }
  return result;
}
