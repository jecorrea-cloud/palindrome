// Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string is a palindrome string.
// Palindrome means the string will read the same from left to right or right to left.

function palindrome(string) {
  let lastChar = string.length() - 1;
  // Base cases
  if (string[0] != string[lastChar]) return false;

  if (string.length() < 2) return true;
}
