var assert = require('assert');
var arr = require('./');

assert.deepEqual(arr.flatten(['a', 'b', 'c', 'd']), ['a', 'b', 'c', 'd']);
assert.deepEqual(arr.flatten(['a', ['b'], 'c', 'd']), ['a', 'b', 'c', 'd']);
assert.deepEqual(arr.flatten(['a', ['b'], ['c', 'd']]), ['a', 'b', 'c', 'd']);
assert.deepEqual(arr.flatten(['a', ['b'], ['c', 'd'], []]), ['a', 'b', 'c', 'd']);
