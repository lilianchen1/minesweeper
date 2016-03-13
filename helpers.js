function include(array, item) {
  if (array.length === 0) {
    return false;
  } else {
    for (var i = 0; i < array.length; i++) {
      if (array[i][0] === item[0] && array[i][1] === item[1]) {
          return true;
      }
    }
    return false;
  }
}

function stringInclude(big, small) {
  for (var i = 0; i < big.length; i++) {
    for (var j = 1; j <= big.length; j++) {
      if (big.slice(i, j) === small) {
        return true
      }
    }
  }
  return false
}

function outsideRange(n) {
  if (n < 0 || n > 9) {
    return true;
  } else {
    return false;
  }
}

function sameArray(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
}

function removeFlagged(arr, tile) {
  for (var i = 0; i < arr.length; i++) {
    var currentTile = arr[i];
    if (currentTile.coord === tile.coord) {
      arr = arr.slice(0, i).concat(arr.slice(i + 1, arr.length));
    }
  }
}

var dirs = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [-1, -1], [-1, 1], [1, -1]];
