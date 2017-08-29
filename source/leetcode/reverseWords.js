/*
Easy
reverse the order of characters in each word
while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Note: In the string, each word is separated by single space.
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s.split(' ')
    .map(str => str.split('').reverse().join(''))
    .join(' ');
};
export default reverseWords;
