/* Instructions:
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

// Solution:
function high(x){
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var aword = [];
    x.split(" ").map( word => {
      var count = 0;
      word.split("").map( letter => count += alphabet.search(letter) + 1 );
      aword.push( { word: word, count: count } );
    });
    return aword.sort( (a, b) => a.count < b.count )[0].word;
  }