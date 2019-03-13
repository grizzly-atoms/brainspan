'use strict'

const tk = require('timekeeper');

const Duration = require('../Duration');

/** @test {Duration} */
describe('Duration', () => {

  let duration;

  it('has number seconds in various units of time', () => {
    expect(Duration.SECONDS_PER_MINUTE).toBe(60);
    expect(Duration.SECONDS_PER_HOUR).toBe(60 * 60);
    expect(Duration.SECONDS_PER_DAY).toBe(60 * 60 * 24);
    expect(Duration.SECONDS_PER_WEEK).toBe(60 * 60 * 24 * 7);
    expect(Duration.SECONDS_PER_YEAR).toBe(60 * 60 * 24 * 365);
    expect(Duration.SECONDS_PER_MONTH).toBe(60 * 60 * 24 * 365 / 12);
  });

  /** @test {Duration#valueOf} */
  it('stores a unit of time in seconds', () => {
    duration = new Duration(100);
    expect(duration.valueOf()).toBe(100);
  });

  /** @test {Duration#seconds} */
  it('represents Duration in seconds', () => {
    duration = new Duration(1);
    expect(duration.seconds).toBe(1);
  });
  
  /** @test {Duration#minutes} */
  it('represents Duration in minutes', () => {
    duration = new Duration(60);
    expect(duration.asMinutes).toBe(1);
  });
  
  /** @test {Duration#hours} */
  it('represents Duration in hours', () => {
    duration = new Duration(60 * 60);
    expect(duration.asHours).toBe(1);
  });
  
  /** @test {Duration#days} */
  it('represents Duration in days', () => {
    duration = new Duration(60 * 60 * 24);
    expect(duration.asDays).toBe(1);
  });
  
  /** @test {Duration#weeks} */
  it('represents Duration in weeks', () => {
    duration = new Duration(60 * 60 * 24 * 7);
    expect(duration.asWeeks).toBe(1);
  });
  
  /** @test {Duration#months} */
  it('represents Duration in months', () => {
    duration = new Duration(60 * 60 * 24 * 365 / 12);
    expect(duration.asMonths).toBe(1);
  });
  
  /** @test {Duration#years} */
  it('represents Duration in years', () => {
    duration = new Duration(60 * 60 * 24 * 365);
    expect(duration.asYears).toBe(1);
  });
  
  /** @test {Duration#asMilliseconds} */
  it('represents Duration in milliseconds', () => {
    duration = new Duration(1);
    expect(duration.asMilliseconds).toBe(1000);
  });
  
  describe('Relative times', () => {
    const now = new Date(123456789);
    duration = new Duration(60);
    
    /** @test {Duration#since} */
    it('calculates the time in the future', () => {
      const now = new Date('1980-01-08');
      tk.freeze(now);
      const expectedDate = new Date(now + duration.asMilliseconds);
      expect(duration.since()).toEqual(expectedDate);
      expect(duration.fromNow()).toEqual(duration.since());
      expect(duration.after()).toEqual(duration.since());
      tk.reset();
    });
    
    /** @test {Duration#since} */
    it('calculates the time in the future from a given Date', () => {
      const expectedDate = new Date(now + duration.asMilliseconds);
      expect(duration.since(now)).toEqual(expectedDate);
      expect(duration.fromNow(now)).toEqual(duration.since(now));
      expect(duration.after(now)).toEqual(duration.since(now));
    });

    /** @test {Duration#ago} */
    it('calculates the time in the past', () => {
      const now = new Date('1980-01-08');
      tk.freeze(now);
      const expectedDate = new Date(now - duration.asMilliseconds);
      expect(duration.ago()).toEqual(expectedDate);
      expect(duration.until()).toEqual(duration.ago());
      expect(duration.before()).toEqual(duration.ago());
      tk.reset();
    });
    
    /** @test {Duration#ago} */
    it('calculates the time in the past from a given Date', () => {
      const expectedDate = new Date(now - duration.asMilliseconds);
      expect(duration.ago(now)).toEqual(expectedDate);
      expect(duration.until(now)).toEqual(duration.ago(now));
      expect(duration.before(now)).toEqual(duration.ago(now));
    });
  });
});