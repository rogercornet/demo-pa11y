const pa11y = require('pa11y') // Docs: https://github.com/pa11y/pa11y

const { paths } = require('./package.json')
const pa11yConfig = {
  ignore: [
    'notice', 'warning'
  ],
  standard: 'WCAG2AA'
}

const test = pa11y(pa11yConfig)

paths.a11y.forEach((url) => {
  test.run(url, (error, results) => {
    if (error) {
      console.error(error.message)
      process.exit(-1)
    }

    if (results.length > 0) {
      // Print errors and finish the process
      console.error(JSON.stringify(results, null, '  '))
      process.exit(-1)
    }
  })
})
