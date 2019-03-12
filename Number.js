const Duration = require('./Duration');

/* eslint-disable no-extend-native */
Object.defineProperty(Number.prototype, 'seconds', {
  get() {
    return new Duration(this.valueOf());
  },
});

Object.defineProperty(Number.prototype, 'second', {
  get() {
    return this.seconds;
  },
});

Object.defineProperty(Number.prototype, 'minutes', {
  get() {
    return new Duration(this.valueOf() * Duration.SECONDS_PER_MINUTE);
  },
});

Object.defineProperty(Number.prototype, 'minute', {
  get() {
    return this.minutes;
  },
});

Object.defineProperty(Number.prototype, 'hours', {
  get() {
    return new Duration(this.valueOf() * Duration.SECONDS_PER_HOUR);
  },
});

Object.defineProperty(Number.prototype, 'hour', {
  get() {
    return this.hours;
  },
});

Object.defineProperty(Number.prototype, 'days', {
  get() {
    return new Duration(this.valueOf() * Duration.SECONDS_PER_DAY);
  },
});

Object.defineProperty(Number.prototype, 'day', {
  get() {
    return this.days;
  },
});

Object.defineProperty(Number.prototype, 'weeks', {
  get() {
    return new Duration(this.valueOf() * Duration.SECONDS_PER_WEEK);
  },
});

Object.defineProperty(Number.prototype, 'week', {
  get() {
    return this.weeks;
  },
});

Object.defineProperty(Number.prototype, 'months', {
  get() {
    return new Duration(this.valueOf() * Duration.SECONDS_PER_MONTH);
  },
});

Object.defineProperty(Number.prototype, 'month', {
  get() {
    return this.months;
  },
});

Object.defineProperty(Number.prototype, 'years', {
  get() {
    return new Duration(this.valueOf() * Duration.SECONDS_PER_YEAR);
  },
});

Object.defineProperty(Number.prototype, 'year', {
  get() {
    return this.years;
  },
});
