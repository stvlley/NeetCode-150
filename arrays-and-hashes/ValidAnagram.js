// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
let s = "anagram" 
let t = "nagarammm"


function isAnagram(s, t) {
    if(s.length !== t.length) {
        return false;
    }
    let sMap = {};
    let tMap = {};
    for(let i = 0; i < s.length; i++) {
        if(sMap.hasOwnProperty(s[i])) {
            sMap[s[i]]++
        } else {
            sMap[s[i]] = 1;
        }
        if(tMap.hasOwnProperty(t[i])) {
            tMap[t[i]]++
        } else {
            tMap[t[i]] = 1;
        }
    }
    for(let k in sMap) {
        if(sMap[k] !== tMap[k]) {
            return false;
        }
    }
    return true;
};

console.log(isAnagram(s, t))