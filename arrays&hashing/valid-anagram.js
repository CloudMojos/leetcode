// 242. Valid Anagram
// Easy
// 10.6K
// 330
// Companies
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

/**
 * Check if two strings are anagrams.
 *
 * @param {string} s - The first input string.
 * @param {string} t - The second input string.
 * @returns {boolean} True if the strings are anagrams, false otherwise.
 */
function isAnagram(s, t) {
    let sArr = s.split('');
    let tArr = t.split('');

    if (s.length !== t.length) {
        return false;
    }
    
    for (let i = 0; i < sArr.length; i++) {
        for (let j = 0; j < tArr.length; j++) {
            if (sArr[i] === tArr[j]) {
                sArr.splice(i, 1);
                tArr.splice(j, 1);
                i = -1;
                j = -1;
                break;
            } 
        }
    }
    return sArr.length === 0 && tArr.length === 0
}

console.log(isAnagram('anagram', 'nagaram'));

