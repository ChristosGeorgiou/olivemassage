const gulp = require('gulp')
require('gulp-cg-toolkit')(gulp, {

    files: [{
        source: './src/static/**/*.*',
        destination: './dist/'
    }, {
        source: './node_modules/jquery/dist/**/*.*',
        destination: './dist/vendor/jquery'
    }, {
        source: './node_modules/bootstrap/dist/**/*.*',
        destination: './dist/vendor/bootstrap/'
    }]
})