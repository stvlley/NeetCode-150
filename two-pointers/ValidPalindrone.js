// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

let s = "A man, a plan, a canal: Panama"

function isPalindrone(s) {
    s = s.replace(/[\W_]+/g,"").toLowerCase();
    let leftIndex = 0;
    let rightIndex = s.length -1;
    while ( leftIndex < rightIndex) {
        if (s[leftIndex] !== s[rightIndex]) return false;
        leftIndex ++ 
        rightIndex -- 

    }
    return true

}
console.log(isPalindrone(s))
