function sortedFrequency(sortedArr, target) {
  function findStart(sortedArr, target) {
    let lowerBound = 0;
    let upperBound = sortedArr.length;
    let iterating = true;

    do {
      if (lowerBound === upperBound && sortedArr[lowerBound] !== target)
        return -1;
      let currentIdx = Math.floor((lowerBound + upperBound) / 2);
      if (sortedArr[currentIdx] === target) {
        if (currentIdx === 0 || sortedArr[currentIdx - 1] !== target)
          return currentIdx;
        else upperBound = currentIdx;
      } else if (sortedArr[currentIdx] > target) {
        upperBound = currentIdx;
      } else {
        lowerBound = currentIdx;
      }
    } while (iterating);
  }

  function findEnd(sortedArr, target) {
    let lowerBound = 0;
    let upperBound = sortedArr.length;
    let iterating = true;

    do {
      if (lowerBound === upperBound && sortedArr[lowerBound] !== target)
        return -1;
      let currentIdx = Math.floor((lowerBound + upperBound) / 2);
      if (sortedArr[currentIdx] === target) {
        if (
          currentIdx + 1 === sortedArr.length ||
          sortedArr[currentIdx + 1] !== target
        )
          return currentIdx;
        else lowerBound = currentIdx;
      } else if (sortedArr[currentIdx] > target) {
        upperBound = currentIdx;
      } else {
        lowerBound = currentIdx;
      }
    } while (iterating);
  }

  if (sortedArr.length === 0) return 0;
  if (sortedArr.length === 1) return sortedArr[0] === target ? 1 : 0;

  let start = findStart(sortedArr, target);
  let end = findEnd(sortedArr, target);
  if (start === -1) return 0;
  return end - start + 1;
}

module.exports = sortedFrequency;
