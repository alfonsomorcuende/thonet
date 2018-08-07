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

// Transform design/props.yml to dist/props.scss:

gulp.task('tokens', () =>
  gulp.src(paths.tokens)
    .pipe(p.theo({ format: { type: 'styl' } }))
    .pipe(gulp.dest('src/styles/tokens'))
)
