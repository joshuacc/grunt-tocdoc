# grunt-tocdoc

> Grunt plugin to generate table-of-contents based documentation sites (ala Backbone/Underscore) from Markdown.

[See how this README looks as a tocdoc.](http://joshuacc.github.io/grunt-tocdoc/)

[![Code Climate](https://codeclimate.com/github/joshuacc/grunt-tocdoc.png)](https://codeclimate.com/github/joshuacc/grunt-tocdoc)

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-tocdoc --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-tocdoc');
```

## The "tocdoc" task

### Overview
In your project's Gruntfile, add a section named `tocdoc` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  tocdoc: {
    options: {
      // Task-specific options go here.
    },
    docSite: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.cssFilePath
Type: `String`
Default value: `'tocdoc.css'`

The location in the filesystem (relative to your Gruntfile) where the required CSS file will be written.

#### options.cssUrl
Type: `String`
Default value: `'tocdoc.css'`

The url where the HTML page should look for its required CSS. This may need to be different than the `cssFilePath` if you are not writing them both to the root of your project.

### Usage Examples

#### Default Options
In this example, the default options are used to generate API documention from a set of markdown files. So if the `overview.md` and `api.md` files are valid Markdown, then `index.html` will list the overview content first, the api content second, and display a scrollable table of contents on the left-hand side. It will also output a file called `tocdoc.css` side-by-side with your `Gruntfile` to provide the necessary styles for your doc site.

```js
grunt.initConfig({
  tocdoc: {
    options: {},
    docSite: {
      files: {
        'index.html': ['overview.md', 'api.md'],
      }
    }
  }
})
```

#### Custom Options
In this example, custom options are used to specify a different location for the css file because the generated documentation resides in a subdirectory. Note that `cssFilePath` and `cssUrl` are not the same in this case. The file path is relative to the `Gruntfile` while the `cssUrl` is relative to the html page.

```js
grunt.initConfig({
  tocdoc: {
    options: {
        cssFilePath: 'docs/styles.css',
        cssUrl: 'styles.css'
    },
    docSite: {
      files: {
        'docs/index.html': ['overview.md', 'api.md'],
      }
    }
  }
})
```

### Using Bootstrap styles

Because grunt-tocdoc is based on Bootstrap, you have access to a wide range of CSS components you can use as needed. For instance, if you want to create a download button you can do so like this.

```html
<a class="btn btn-primary btn-large">Download AwesomeLibrary.js</a>
```

And it will look like this:

<a class="btn btn-primary btn-large">Download AwesomeLibrary.js</a>

(Example is only visible on the [tocdoc version of the readme](http://joshuacc.github.io/grunt-tocdoc/#using-bootstrap-styles).)

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/joshuacc/grunt-tocdoc/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

