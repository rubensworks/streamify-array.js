module.exports = function(array) {
  var readable = new (require('stream').Readable)({ objectMode: true });
  readable._read = function() {
    readable.push(array.shift());
    if (!array.length) {
      readable.push(null);
    }
  };
  return readable;
};

