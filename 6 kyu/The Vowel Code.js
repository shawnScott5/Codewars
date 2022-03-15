/* Instructions:
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".
*/

// Solution:
const vowels = ['a', 'e', 'i', 'o', 'u']

const encode = string => string.split('').map(character => vowels.indexOf(character) + 1 || character).join('')
const decode = string => string.split('').map(character => vowels[Number(character) - 1] || character).join('')