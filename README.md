[![CircleCI](https://circleci.com/gh/grizzly-atoms/brainspan.svg?style=svg)](https://circleci.com/gh/grizzly-atoms/brainspan)
[![codecov](https://codecov.io/gh/grizzly-atoms/brainspan/branch/master/graph/badge.svg)](https://codecov.io/gh/grizzly-atoms/brainspan)
[![esdoc](https://grizzly-atoms.github.io/brainspan/badge.svg)](https://grizzly-atoms.github.io/brainspan/)

# Brainspan

When dealing with units of measure, Brainspan does the thinking so you don't have to. Brainspan was inspired by Rails Rails Numeric and ActiveSupport::Duration.

## Example Usage

### Use with Numeric Mixin:
```
require('brainspan').enableMixins();

(1).month.ago(); // Date representing the timestamp from a month prior to current time
(1).month.fromNow(); // Date representing the timestamp from a month in the future
(2).weeks.before(new Date(0)); // Date representing two weeks before the Unix Epoc
(8).days.after(new Date('2019-03-10')); // Date representing March 18, 2019
```

### If you prefer not to extend the Number prototype:
```
const { Duration } = require('brainspan');

const oneMonth = new Duration(Duration.SECONDS_PER_MONTH);
oneMonth.ago(); // Date representing the timestamp from a month prior to current time
oneMonth.fromNow(); // Date representing the timestamp from a month in the future

const twoWeeks = new Duration(Duration.SECONDS_PER_WEEK * 2);
twoWeeks.before(new Date(0)); // Date representing two weeks before the Unix Epoc

const eightDays = new Duration(Duration.SECONDS_PER_DAY * 8);
eightDays.after(new Date('2019-03-10')); // Date representing March 18, 2019
```

## Links
### API Documentation
https://grizzly-atoms.github.io/brainspan/
### NPM
https://www.npmjs.com/package/brainspan
