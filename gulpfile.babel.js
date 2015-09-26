
import gulp from 'gulp'
import budo from 'budo'
import garnish  from 'garnish'
import once from 'once'
import errorify from 'errorify'
import openURL from 'opn'
import babelify from 'babelify'
import minimist from 'minimist'

const browser = 'google chrome canary'
const argv = minimist(process.argv.slice(2), {
  string: 'd', // difficulty
  number: 'c'}) // challenge

const challenges = {
  'easy' : [
    '01-First-Reverse.js',
    '02-First-Factorial.js',
    '03-Longest-Word.js',
    '04-Letter-Changes.js',
    '05-Simple-Adding.js',
    '06-Letter-Capitalize.js',
    '07-Simple-Symbols.js',
    '08-Check-Nums.js',
    '09-Time-Convert.js',
    '10-Alphabet-Soup.js',
    '11-AB-Check.js',
    '12-Vowel-Count.js',
    '13-Word-Count.js',
    '14-Ex-Oh.js',
    '15-Palindrome.js',
    '16-Arith-Geo.js',
    '17-Array-Addition-I.js',
    '18-Letter-Count-I.js',
    '19-Second-GreatLow.js',
    '20-Division-Stringified.js',
    '21-Counting-Minutes-I.js',
    '22-Mean-Mode.js',
    '23-Dash-Insert.js',
    '24-Swap-Case.js',
    '25-Number-Addition.js',
    '26-Third-Greatest.js',
    '27-Powers-of-Two.js',
    '28-Additive-Persistence.js',
    '29-Multiplicative-Persistence.js',
    '30-Off-Line-Minimum.js'
  ],
  'medium' : [

  ],
  'hard' : [

  ]
}

gulp.task('clog', function() {
  console.log( argv );
})

const entry = `./${argv.d}/${challenges[argv.d][argv.c - 1]}`

//the development task
gulp.task('default', function(cb) {

  var ready = function(){}
  var pretty = garnish()
  pretty.pipe(process.stdout)

  //dev server
  budo(entry, {
    stream: pretty,        //pretty-print requests
    live: true,            //live reload & CSS injection
    verbose: true,         //verbose watchify logging
    //dir: 'app',          //directory to serve
    transform: babelify,   //browserify transforms
    plugin: errorify       //display errors in browser
  })
  .on('exit', cb)
  .on('connect', function(ev) {
    ready = once(openURL.bind(null, ev.uri, {app: browser} ))
  })
  .once('update', function() {
    ready()
  })
})

// Usage: gulp --d easy --c 1
