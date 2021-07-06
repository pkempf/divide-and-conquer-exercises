function findFloor(arr, val) {
  if (arr.length === 0 || arr[0] > val) return -1;

  let lowerBound = 0;
  let upperBound = arr.length;
  let iterating = true;

  do {
    let currentIdx = Math.floor((lowerBound + upperBound) / 2);

    if (
      currentIdx === arr.length - 1 ||
      (arr[currentIdx] <= val && arr[currentIdx + 1] > val)
    )
      return arr[currentIdx];
    else if (arr[currentIdx] > val) upperBound = currentIdx;
    else lowerBound = currentIdx;
  } while (iterating);
}

module.exports = findFloor;
