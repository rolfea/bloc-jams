function forEach(listToLoop, callback) {
  for (var i = 0; i < listToLoop.length; i++) {
    callback(i);
  }
}