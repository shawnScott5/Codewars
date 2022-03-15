/* Instructions:
Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.

Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

// Solution:
var encryptThis = function(text) {
    let newText = text.split(' ');
    let output = [];
    
    newText.forEach(el => {
      if (el.length === 1) {
        output.push(el.charCodeAt(0));
      } else {
        let tempText = el.split('');
        tempText[0] = el.charCodeAt(0);
        tempText[1] = el[el.length - 1];
        tempText[el.length - 1] = el[1];
        output.push(tempText.join(''));
      }
    });
    return output.join(' ');
  }