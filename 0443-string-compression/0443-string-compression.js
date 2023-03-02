/**
 * @param {character[]} chars
 * @return {number}
 */
function compress(chars) {
  let currentChar = chars[0];
  let currentCount = 1;
  let writeIndex = 0;

  for (let i = 1; i <= chars.length; i++) {
    if (chars[i] === currentChar) {
      currentCount++;
    } else {
      chars[writeIndex++] = currentChar;
      if (currentCount > 1) {
        let countStr = currentCount.toString();
        for (let j = 0; j < countStr.length; j++) {
          chars[writeIndex++] = countStr[j];
        }
      }
      currentChar = chars[i];
      currentCount = 1;
    }
  }

  return writeIndex;
};