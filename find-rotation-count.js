function findRotationCount(arr) {
  //borrowed from my solution to findRotatedIndex()
  function findPivotIndex(arr) {
    let lowerBound = 0;
    let upperBound = arr.length;
    let iterating = true;

    do {
      let currentIdx = Math.floor((lowerBound + upperBound) / 2);
      if (
        currentIdx + 1 === arr.length ||
        arr[currentIdx] > arr[currentIdx + 1]
      )
        return currentIdx;
      else if (arr[currentIdx] > arr[arr.length - 1]) lowerBound = currentIdx;
      else upperBound = currentIdx;
    } while (iterating);
  }

  const pivotIndex = findPivotIndex(arr);
  return pivotIndex === arr.length - 1 ? 0 : pivotIndex + 1;
}

module.exports = findRotationCount;
