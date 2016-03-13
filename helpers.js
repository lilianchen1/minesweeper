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

function outsideRange(n) {
  if (n < 0 || n > 9) {
    return true;
  } else {
    return false;
  }
}

var dirs = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [-1, -1], [-1, 1], [1, -1]];
