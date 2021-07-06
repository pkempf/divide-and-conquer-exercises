function countZeroes(arr) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0] === 0 ? 1 : 0;
  if (arr[0] === 0) return arr.length;
  else {
    let lowerBound = 0;
    let upperBound = arr.length;
    let iterating = true;
    do {
      let currentIdx = Math.floor((upperBound + lowerBound) / 2);
      if (arr[currentIdx] === 0) {
        if (arr[currentIdx - 1] === 1) return arr.length - currentIdx;
        else upperBound = currentIdx;
      } else {
        lowerBound = currentIdx;
      }
    } while (iterating);
  }

  return "Error!";
}

module.exports = countZeroes;
