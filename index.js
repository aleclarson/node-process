
var process = module.exports = {};

process.title = 'browser';
process.browser = true;
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.env = {
  NODE_ENV: __DEV__ ? 'development' : 'production'
};

process.stdout = {
  isTTY: false
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function() {
  return 0;
};
