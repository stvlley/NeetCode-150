// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
let s = "()[]{}"

var isValid = function (s) {
    let closeMap = {
        '}': '{',
        ')': '(',
        ']': '[',
    };

    let charStack = [];

    if (!s) return false;

    for (let i = 0; i < s.length; i++) {
        let curr = s.charAt(i);
        // check if closing bracket
        if (closeMap[curr]) {
            const topElement = charStack.length === 0 ? '#' : charStack.pop();
            if (topElement !== closeMap[curr]) {
                return false;
            }
            // opening bracket case
        } else {
            charStack.push(curr);
        }
    }

    return charStack.length === 0;
};

console.log(isValid(s))