'use strict'

const moment = require('moment');

const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_HOUR = SECONDS_PER_MINUTE * 60;
const SECONDS_PER_DAY = SECONDS_PER_HOUR * 24;
const SECONDS_PER_WEEK = SECONDS_PER_DAY * 7;
const SECONDS_PER_YEAR = SECONDS_PER_DAY * 365;
const SECONDS_PER_MONTH = SECONDS_PER_YEAR / 12;

module.exports = class Duration {

    static get SECONDS_PER_MINUTE() {
      return SECONDS_PER_MINUTE;
    }
  
    static get SECONDS_PER_HOUR() {
      return SECONDS_PER_HOUR;
    }
  
    static get SECONDS_PER_DAY() {
      return SECONDS_PER_DAY;
    }
  
    static get SECONDS_PER_WEEK() {
      return SECONDS_PER_WEEK;
    }
  
    static get SECONDS_PER_MONTH() {
      return SECONDS_PER_MONTH;
    }
  
    static get SECONDS_PER_YEAR() {
      return SECONDS_PER_YEAR;
    }

  constructor(seconds){
    this.seconds = seconds;
  }

  get asMilliseconds() {
    return this.seconds * 1000;
  }

  get asMinutes() {
    return this.seconds / SECONDS_PER_MINUTE;
  }

  get asHours() {
    return this.seconds / SECONDS_PER_HOUR;
  }

  get asDays() {
    return this.seconds / SECONDS_PER_DAY;
  }

  get asWeeks() {
    return this.seconds / SECONDS_PER_WEEK;
  }

  get asMonths() {
    return this.seconds / SECONDS_PER_MONTH;
  }

  get asYears() {
    return this.seconds / SECONDS_PER_YEAR;
  }

  since(date = new Date) {
    return new Date(date + this.asMilliseconds);
  }

  from_now(date) {
    return this.since(date);
  }

  after(date) {
    return this.since(date);
  }

  valueOf() {
    return this.seconds;
  }

  ago(date = new Date){
    return new Date(date - this.asMilliseconds);
  }

  until(date){
    return this.ago(date);
  }

  before(date){
    return this.ago(date);
  }
}
