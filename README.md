# js-dely

Delay execution of callbacks to a given minimum timeframe. Tiny package, has below 50 lines of code. 

[![Build Status](https://travis-ci.org/jankapunkt/js-dely.svg?branch=master)](https://travis-ci.org/jankapunkt/js-dely)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## For what?

Some events on the client happen very fast so that there is no visual feedback of "currently executing action XYZ".
This package is an easy and minimalistic appraoch to realize such a feature. Define a minimum amount is miliseoonds the action should take and the callback wont't execute before this timeframe.
If the callback took longer than the time - fine, no need to delay anymore.

The amount of time from prior function execution to callback execution is considered, of course.

## Installation / usage

Use NPM to install the package via

```bash
$ npm install --save dely
```

Use it to create a delayed callback like so

```javascript
import dely from 'dely'

/**
 * This could be a server call with callback, a setTimeout or
 * an IO related function... or anything else with callback 
 */
SomeAsyncFunctionWithCallback(dely(300, (/* args if any */) => {
  console.log('I have not been executed before 300ms have been passed')
}))
```

Or use it to factory-create callbacks like so

```javascript
import dely from 'dely'

const by300 = dely(300)

SomeAsyncFunctionWithCallback(by300((/* args if any */) => {
  console.log('I have not been executed before 300ms have been passed')
}))

anotherAsyncFunctionWithCallback(by300((/* args if any */) => {
  console.log('I also have not been executed before 300ms have been passed')
}))
```


