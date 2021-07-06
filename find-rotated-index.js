// note: assumes only one instance of each number per array

function findRotatedIndex(rotatedArr, target) {
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

  let pivotIdx = findPivotIndex(rotatedArr);
  let lowerBound;
  let upperBound;
  let iterating = true;

  if (rotatedArr[pivotIdx] === target) return pivotIdx;
  else if (rotatedArr[rotatedArr.length - 1] === target)
    return rotatedArr.length - 1;
  else if (rotatedArr[rotatedArr.length - 1] > target) {
    lowerBound = pivotIdx + 1;
    upperBound = rotatedArr.length;
  } else {
    lowerBound = 0;
    upperBound = pivotIdx + 1;
  }

  do {
    if (lowerBound === upperBound && rotatedArr[lowerBound] !== target)
      return -1;
    let currentIdx = Math.floor((lowerBound + upperBound) / 2);
    if (rotatedArr[currentIdx] === target) return currentIdx;
    else if (rotatedArr[currentIdx] > target) upperBound = currentIdx;
    else lowerBound = currentIdx;
  } while (iterating);
}

module.exports = findRotatedIndex;
