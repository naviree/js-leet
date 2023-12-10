/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

// create two strings ransom and magazine

// create a boolean if they match and return boolean

// l

let ransomNote = "aa";
let magazine = "aab";

var canConstruct = function (ransomNote, magazine) {
	for (const char of magazine) {
		ransomNote = ransomNote.replace(char, "");
	}

	if (!ransomNote) return true;
	else return false;
};

console.log(canConstruct(ransomNote, magazine));
