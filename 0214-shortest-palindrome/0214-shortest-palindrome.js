/**
 * @param {string} s
 * @return {string}
 */
function shortestPalindrome(s) {
  let rev = s.split('').reverse().join('');
  let i = s.length;

  while (i > 0) {
    if (s.substring(0, i) === rev.substring(s.length - i)) {
      return rev.substring(0, s.length - i) + s;
    }
    i--;
  }

  return s;
};