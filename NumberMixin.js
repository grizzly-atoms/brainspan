/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

/**
 * @type {Object} Duration
 */
const Duration = require('./Duration');

/**
 * @type {Object} Mixin to allow numbers to be used to work with Durations
 * @example
 * NumberMixin.extend(Number.prototype);
 * (4).weeks // returns a duration that represents the number of seconds in 4 weeks
 */
const NumberMixin = {
  /**
   * Pass the prototype you want to exend to NumberMixin.extend to grant it Duration methods
   * @param {Object} prototype
   */
  extend(prototype) {
    const args = [
      prototype,
      this,
    ];
    Array.prototype.slice.call(args, 1).forEach((source) => {
      let descriptor; let
        prop;
      if (source) {
        for (prop in source) {
          descriptor = Object.getOwnPropertyDescriptor(source, prop);
          Object.defineProperty(prototype, prop, descriptor);
        }
      }
    });
    return prototype;
  },
  get seconds() {
    return new Duration(this.valueOf());
  },
  get second() {
    return this.seconds;
  },
  get minutes() {
    return new Duration(this.valueOf() * Duration.SECONDS_PER_MINUTE);
  },
  get minute() {
    return this.minutes;
  },
  get hours() {
    return new Duration(this.valueOf() * Duration.SECONDS_PER_HOUR);
  },
  get hour() {
    return this.hours;
  },
  get days() {
    return new Duration(this.valueOf() * Duration.SECONDS_PER_DAY);
  },
  get day() {
    return this.days;
  },
  get weeks() {
    return new Duration(this.valueOf() * Duration.SECONDS_PER_WEEK);
  },
  get week() {
    return this.weeks;
  },
  get months() {
    return new Duration(this.valueOf() * Duration.SECONDS_PER_MONTH);
  },
  get month() {
    return this.months;
  },
  get years() {
    return new Duration(this.valueOf() * Duration.SECONDS_PER_YEAR);
  },
  get year() {
    return this.years;
  },
};

module.exports = NumberMixin;
