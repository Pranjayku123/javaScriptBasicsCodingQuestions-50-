// # Q-01- Write a JavaScript function to calculate the sum of two numbers.

const sumOfTwoNum = () => {
  numberA = 20;
  numberB = 60;
  sumNumber = numberA + numberB;
  console.log(sumNumber);
};
sumOfTwoNum();

// ======================================================================================================

// # Q-02- Write a JavaScript program to find the maximum number in an array.

const findMaxNum = () => {
  let baseArr = [6, 15, 66, 7, 99, 23];
  let maxNum = baseArr[0];
  for (let i = 1; i < baseArr.length; i++) {
    if (maxNum < baseArr[i]) {
      maxNum = baseArr[i];
    }
  }
  console.log(maxNum);
};
findMaxNum();
// ========================================================================================================

// # Q-02-Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 

 
    
function isPalindrome(str) {
    var cleanedStr = '';
    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase();
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            cleanedStr += char;
        }
    }
    var start = 0;
    var end = cleanedStr.length - 1;

    while (start < end) {
        if (cleanedStr[start] !== cleanedStr[end]) {
            return false; 
        }
        start++;
        end--;
    }

    return true; 
}

console.log(isPalindrome("A man, a plan, a canal, Panama!")); 
console.log(isPalindrome("Hello, World!")); 
