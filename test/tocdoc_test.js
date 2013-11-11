'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.tocdoc = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  singleFile: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/singleFile');
    var expected = grunt.file.read('test/expected/singleFile');
    test.equal(actual, expected, 'should convert a single file into a tocdoc.');

    test.done();
  },
  joinFiles: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/joinFiles');
    var expected = grunt.file.read('test/expected/joinFiles');
    test.equal(actual, expected, 'should join multiple files into a single tocdoc.');

    test.done();
  }
};
