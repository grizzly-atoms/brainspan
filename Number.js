'use strict';

const Duration = require('./Duration');

Object.defineProperty(Number.prototype, "seconds", {
  get: function() {
    return new Duration(this.valueOf());
  }
});

Object.defineProperty(Number.prototype, "second", {
  get: function() {
    return this.seconds;
  }
});

Object.defineProperty(Number.prototype, "minutes", {
  get: function() {
    return new Duration(this.valueOf() * Duration.SECONDS_PER_MINUTE);
  }
});

Object.defineProperty(Number.prototype, "minute", {
  get: function() {
    return this.minutes;
  }
});

Object.defineProperty(Number.prototype, "hours", {
  get: function() {
    return new Duration(this.valueOf() * Duration.SECONDS_PER_HOUR);
  }
});

Object.defineProperty(Number.prototype, "hour", {
  get: function() {
    return this.hours;
  }
});

Object.defineProperty(Number.prototype, "days", {
  get: function() {
    return new Duration(this.valueOf() * Duration.SECONDS_PER_DAY);
  }
});

Object.defineProperty(Number.prototype, "day", {
  get: function() {
    return this.days;
  }
});

Object.defineProperty(Number.prototype, "weeks", {
  get: function() {
    return new Duration(this.valueOf() * Duration.SECONDS_PER_WEEK);
  }
});

Object.defineProperty(Number.prototype, "week", {
  get: function() {
    return this.weeks;
  }
});

Object.defineProperty(Number.prototype, "months", {
  get: function() {
    return new Duration(this.valueOf() * Duration.SECONDS_PER_MONTH);
  }
});

Object.defineProperty(Number.prototype, "month", {
  get: function() {
    return this.months;
  }
});

Object.defineProperty(Number.prototype, "years", {
  get: function() {
    return new Duration(this.valueOf() * Duration.SECONDS_PER_YEAR);
  }
});

Object.defineProperty(Number.prototype, "year", {
  get: function() {
    return this.years;
  }
});
