
let dictionary = [
    'banana',
    'andromeda',
    'antihistamine',
    'antagonist',
    'buttercream',
    'answer',
];

let word = 'ana';

console.log('Word to search for: ' + word + '\n');
console.log('Array of words: ' + dictionary + '\n');
console.log('Longest word in array containing "ana" was: ' + longestMatch(word, dictionary));

/* --- Functions --- */

// Main Function
function longestMatch(word, dictionary) {
    let subsequences = [];
    for (var element of dictionary) {
        let map = mapString(element);
        if (isSubsequence(word, map)) {
            subsequences.push(element);
        }
    }
    return longestWord(subsequences);
}

// Takes in a word from the 'dictionary' array and maps it into an object array
function mapString(word) {
    let map = {};
    for (var i = 0; i < word.length; i++) {
      let letter = word[i];
      if (map[letter]) {
          map[letter].push(i);
      } else {
          map[letter] = [i];
      }
    }
    return map;
}

/* Takes in a word to search for and an object array, and checks if every letter
of the word can be found inside the object array, in order */
function isSubsequence(word, map) {
    let minIndex = 0;
    for (var letter of word) {
        if (map[letter]) {
            minIndex = findNextIndex(map[letter], minIndex);
            if (minIndex === false) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
}

/* Takes in an array of indices and the current index value and checks that the
current value in the array is at least equal to or greater than the current index
value, to ensure letters are checked in order */
function findNextIndex(objectArray, minIndex) {
    for (var index of objectArray) {
        if (index >= minIndex) {
            return (index + 1);
        }
    }
    return false;
}

// Takes in array of words and finds the longest word
function longestWord(subsequences) {
    let longestWord = '';
    for (var word of subsequences) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
