var argv = require('minimist')(process.argv.slice(2))

var gulp = require('gulp')
var budo = require('budo')
var garnish  = require('garnish')
var once = require('once')
var errorify = require('errorify')
var openURL = require('opn')
var browser = 'google chrome canary'

var files = [
  '01-first-reverse.js',
  '02-first-factorial.js',
  '03-longest-word.js',
  '04-letter-changes.js',
  '05-simple-adding.js',
  '06-letter-capitalize.js',
  '07-check-nums.js',
  '08-time-convert.js',
  '09-alphabet-soup.js',
  '10-ab-check.js',
  '11-vowel-count.js',
  '12-word-count.js',
  '13-ex-oh.js',
  '14-palindrome.js',
  '15-arith-geo.js',
  '16-array-addition-1.js',
  '17-second-greatlow.js',
  '18-division-stringfield.js',
  '19-counting-minutes.js',
  '20-mean-mode.js',
  '21-dash-insert.js',
  '22-swap-case.js',
  '23-number-addition.js',
  '24-thrid-greatest.js',
  '25-powers-of-two.js'
]

var entry = './' + files[0]

//the development task
gulp.task('dev', function(cb) {

  var ready = function(){}
  var pretty = garnish()
  pretty.pipe(process.stdout)

  //dev server
  budo(entry, {
    //serve: './01-first-reverse.js',    //end point for our <script> tag
    stream: pretty,        //pretty-print requests
    live: true,            //live reload & CSS injection
    verbose: true,         //verbose watchify logging
    //dir: 'app',            //directory to serve
    //transform: babelify,   //browserify transforms
    plugin: errorify       //display errors in browser
  })
  .on('exit', cb)
  .on('connect', function(ev) {
    ready = once(openURL.bind(null, ev.uri, {app: browser} ))
  })
  .once('update', function() {
    //open the browser
    if (argv.open) {
      ready()
    }
  })
})



// Usage

// gulp dev --open
