/*
 * grunt-tocdoc
 * https://github.com/joshuacc/grunt-tocdoc
 *
 * Copyright (c) 2013 Joshua Clanton
 * Licensed under the MIT license.
 */

'use strict';

var marked = require('marked');
var _ = require('lodash');
var toc = require('toc');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('tocdoc', 'Grunt plugin to generate table-of-contents based documentation sites (ala Backbone/Underscore) from a Markdown file.', function() {
    // Establish template context object.
    var context = {
      // Merge task-specific and/or target-specific options with these defaults.
      options: this.options({})
    };

    // Read and compile TocDoc template
    var tmplHTML = grunt.file.read(__dirname + '/tocdoc.html');
    var tmpl = _.template(tmplHTML);

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Convert and join specified files.
      context.compiledSrc = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        var md = grunt.file.read(filepath);
        return marked(md);
      }).join('');

      var headers = toc.anchorize(context.compiledSrc).headers;
      context.table = toc.toc(headers);

      var finalHTML = tmpl(context);
      // Write the destination file.
      grunt.file.write(f.dest, finalHTML);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
