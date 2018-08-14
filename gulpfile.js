const gulp = require('gulp')
const UIengine = require('@uiengine/core')

const isDev = process.env.NODE_ENV !== 'production'

gulp.task('uiengine', done => {
  const opts = {
    serve: isDev,
    watch: isDev
  }

  UIengine.build(opts)
    .then(() => { done() })
    .catch(err => { done(err) })
})


const theo = require('gulp-theo')
