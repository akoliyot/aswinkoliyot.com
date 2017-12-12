+++
author = "Aswin Koliyot"
date =  2017-09-24T16:59:13+05:30
draft = true

title = 'Beginners guide to Gulp'
description = 'Learn to use Gulp to automate your web development tasks'
tags = [
	"tutorial"
]
+++

[Gulp](https://gulpjs.com/) is a task runner that helps you automate tasks. So things like: 

- Minifying files.
- Adding vendor prefixes to CSS.
- Compiling LESS or SASS to CSS.

Of course this is not an exhaustive list and there are a lot more you can accomplish using Gulp. This tutorial will show you how to compile SASS to CSS, minify JS files, and watching files for changes and running tasks automatically.

## Prerequisite
You need to have [npm](https://www.npmjs.com/get-npm) installed. To check if it's already available on your machine run the following commands on a terminal. It should print out the version number if available.

```PowerShell
node -v
npm -v
```

Create a directory somewhere and setup the following structure: 

```markdown
gulpfile.js
src
    - sass
        -app.scss
    - js
        -app.js
```

| File/Directory    | Contains                              |
| -------------     |:-------------------------------------:|
| gulpfile.js       | Gulp configurations.                  |
| src/sass/         | SASS files.                           |
| src/js/           | JS files.                             |

## Setup the project

Initialize your directory with npm.

```PowerShell
npm init -y
```

Install the [Gulp](https://www.npmjs.com/package/gulp) package. 

```PowerShell
npm install gulp --save-dev
```

Great! Now that you have that installed you can set up its configuration. This is where you can tell Gulp what to do. 
<!-- TODO:  Explain about what the configuration will do and why it's required -->

## Compiling SASS to CSS

Install the [SASS](https://github.com/sindresorhus/gulp-ruby-sass) package for gulp.

```PowerShell
npm install gulp-ruby-sass --save-dev
```

###### gulpfile.js
```JavaScript
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

// Compile SASS to CSS
gulp.task('sass', function() {
    // Specify the location where we want to watch for the SASS files.
    sass('src/sass/*.scss')
        // Specify the output directory (will be created if it doesn't exist).
        .pipe(gulp.dest('build'));
});
```

###### src/sass/app.scss

```scss
$text-color: blue;

body {
    color: $text-color;
}
```

Execute the gulp task by running the following code on the terminal.

```shell
gulp sass
```

If you used the same code as above, your directory should now contain a build folder with the file **app.css** which contains the compiled SASS code.

You can take it one step further and minify it too by using: 

```JavaScript
sass('src/sass/*.scss', { style: 'compressed' })
```

## Minifying JavaScript

You can make use of [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) to compress your JS files. Add it to your project.

```shell
npm install gulp-uglify --save-dev
```

###### gulpfile.js
```JavaScript
var uglify = require('gulp-uglify');

gulp.task('minify-scripts', function() {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});
```

###### src/js/app.js
```JavaScript
console.log('A');
console.log('B');
console.log('C');
```

Run the task like you did above and you should see a generated minified JavaScript file.

## Execute all tasks
So far you have been executing the tasks one by one by calling their names. But there's a way you can execute a list of tasks just by calling gulp.

###### gulpfile.js

```JavaScript
// Default gulp task
gulp.task('default', ['sass', 'minify-scripts']);
```

In your terminal, run:
```shell
gulp
```

This will execute both the *sass* and *minify-scripts* tasks.

## Running gulp tasks automatically
The way your project is setup now, you'll need to run the gulp task every time you make a change. You can automate that using Gulp's *watch* method.

###### gulpfile.js

```JavaScript
// Watch files
gulp.task('watch', function() {
    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch('src/js/*.js', ['minify-scripts']);
});

// Add the new method to the default gulp task array.
gulp.task('default', ['sass', 'minify-scripts', 'watch']);
```

Now, when you run gulp it will keep watching for changes to your source files and build them automatically.