/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
  const n = senate.length;
  let radiantQueue = [];
  let direQueue = [];

  for (let i = 0; i < n; i++) {
    if (senate[i] === 'R') {
      radiantQueue.push(i);
    } else {
      direQueue.push(i);
    }
  }

  while (radiantQueue.length && direQueue.length) {
    let radiantIndex = radiantQueue.shift();
    let direIndex = direQueue.shift();

    if (radiantIndex < direIndex) {
      radiantQueue.push(radiantIndex + n);
    } else {
      direQueue.push(direIndex + n);
    }
  }

  return radiantQueue.length ? "Radiant" : "Dire";
};