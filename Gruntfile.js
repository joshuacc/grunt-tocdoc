/*
 * grunt-tocdoc
 * https://github.com/joshuacc/grunt-tocdoc
 *
 * Copyright (c) 2013 Joshua Clanton
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    tocdoc: {
      singleFile: {
        files: {
          'tmp/singleFile': 'test/fixtures/testing'
        },
      },
      joinFiles: {
        files: {
          'tmp/joinFiles': ['test/fixtures/testing', 'test/fixtures/123']
        },
      },
      withOptions: {
        options: {
          title: 'My Title',
          cssFilePath: 'tmp/mycss/tocdoc.css',
          cssUrl: 'mycss/tocdoc.css',
          scripts: ["js/first.js", "js/second.js"]
        },
        files: {
          'tmp/withOptions': 'test/fixtures/testing'
        },
      },
      realDocs: {
        files: { 'index.html': 'README.md' }
      }

    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'tocdoc', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
