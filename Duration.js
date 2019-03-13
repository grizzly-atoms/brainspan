/** @type {number} */
const SECONDS_PER_MINUTE = 60;
/** @type {number} */
const SECONDS_PER_HOUR = SECONDS_PER_MINUTE * 60;
/** @type {number} */
const SECONDS_PER_DAY = SECONDS_PER_HOUR * 24;
/** @type {number} */
const SECONDS_PER_WEEK = SECONDS_PER_DAY * 7;
/** @type {number} */
const SECONDS_PER_YEAR = SECONDS_PER_DAY * 365;
/** @type {number} */
const SECONDS_PER_MONTH = SECONDS_PER_YEAR / 12;

/**
 * Inspired by Rails' ActiveSupport::Duration.
 * Provides accurate date and time measurements.
 * @example
 * // Retuns a Date with the timestamp for a month before the current date and time.
 * (1).month.ago
 */
class Duration {
  /** @returns {Number} the number of seconds in a minute. */
  static get SECONDS_PER_MINUTE() {
    return SECONDS_PER_MINUTE;
  }

  /** @returns {Number} the number of seconds in an hour. */
  static get SECONDS_PER_HOUR() {
    return SECONDS_PER_HOUR;
  }

  /** @returns {Number} the number of seconds in a day. */
  static get SECONDS_PER_DAY() {
    return SECONDS_PER_DAY;
  }

  /** @returns {Number} the number of seconds in a week. */
  static get SECONDS_PER_WEEK() {
    return SECONDS_PER_WEEK;
  }

  /**
   * @returns {Number} the number of seconds in a month.
   * Note: for this purpose, a month is presumed to be 1/12th of a year.
   * */
  static get SECONDS_PER_MONTH() {
    return SECONDS_PER_MONTH;
  }

  /**
   * @returns {Number} the number of seconds in a month.
   * Note: for this purpose, a year is presumed to be 365 days.
   * */
  static get SECONDS_PER_YEAR() {
    return SECONDS_PER_YEAR;
  }

  /**
   * @param {Number} seconds The number of seconds the Duration represents.
   * @returns {Duration} An object representing a span of time.
   */
  constructor(seconds) {
    /** @type {number} The number of seconds the Duration represents. */
    this.seconds = seconds;
  }

  /** @returns {Number} the number of millisends in this duration. */
  get asMilliseconds() {
    return this.seconds * 1000;
  }

  /** @returns {Number} the number of minutes in this duration. */
  get asMinutes() {
    return this.seconds / SECONDS_PER_MINUTE;
  }

  /** @returns {Number} the number of hours in this duration. */
  get asHours() {
    return this.seconds / SECONDS_PER_HOUR;
  }

  /** @returns {Number} the number of days in this duration. */
  get asDays() {
    return this.seconds / SECONDS_PER_DAY;
  }

  /** @returns {Number} the number of weeks in this duration. */
  get asWeeks() {
    return this.seconds / SECONDS_PER_WEEK;
  }

  /** @returns {Number} the number of months in this duration. */
  get asMonths() {
    return this.seconds / SECONDS_PER_MONTH;
  }

  /** @returns {Number} the number of years in this duration. */
  get asYears() {
    return this.seconds / SECONDS_PER_YEAR;
  }

  /**
   * A Date in the future of the given Date, or new Date() if not supplied
   * @param {Date} [date=new Date()]
   * @returns {Date}
   */
  since(date = new Date()) {
    return new Date(date + this.asMilliseconds);
  }

  /**
   * Alias of since
   * @param {Date} [date=new Date()]
   * @returns {Date}
   */
  fromNow(date) {
    return this.since(date);
  }

  /**
   * Alias of since
   * @param {Date} [date=new Date()]
   * @returns {Date}
   */
  after(date) {
    return this.since(date);
  }

  /**
   * A Date in the past of the given Date, or new Date() if not supplied
   * @param {Date} [date=new Date()]
   * @returns {Date}
   */
  ago(date = new Date()) {
    return new Date(date - this.asMilliseconds);
  }

  /**
   * Alias of ago
   * @param {Date} [date=new Date()]
   * @returns {Date}
   */
  until(date) {
    return this.ago(date);
  }

  /**
   * Alias of ago
   * @param {Date} [date=new Date()]
   * @returns {Date}
   */
  before(date) {
    return this.ago(date);
  }

  /**
   * @returns {Number} The number of seconds represented by this Duration.
   */
  valueOf() {
    return this.seconds;
  }
}


module.exports = Duration;
