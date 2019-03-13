# brainspan
When dealing with units of measure, Brainspan does the thinking so you don't have to. Brainspan was inspired by Rails Rails Numeric and ActiveSupport::Duration.

## Example Usage
```
(1).month.ago(); // Date representing the timestamp from a month prior to current time
(1).month.fromNow(); // Date representing the timestamp from a month in the future
(2).weeks.before(new Date(0)); // Date representing two weeks before the Unix Epoc
(8).days.after(new Date('2019-03-10')); // Date representing March 18, 2019
```

## Links
### API Documentation
https://grizzly-atoms.github.io/brainspan/
### NPM
https://www.npmjs.com/package/brainspan
