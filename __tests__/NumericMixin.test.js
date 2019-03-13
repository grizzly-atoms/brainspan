NumericMixin = require('../mixins/numeric/NumericDurations');

NumericMixin.extend(Number.prototype);
const Duration = require('../Duration');

/** @test {NumberMixin} */
describe('NumberMixin', () => {

  it('Returns a duration of seconds', () => {
    expect((1).seconds).toEqual(new Duration(1));
    expect((1).second).toEqual((1).seconds);
  });
  
  it('Returns a duration of minutes', () => {
    expect((1).minutes).toEqual(new Duration(60));
    expect((1).minute).toEqual((1).minutes);
  });
  
  it('Returns a duration of hours', () => {
    expect((1).hours).toEqual(new Duration(60 * 60));
    expect((1).hour).toEqual((1).hours);
  });

  it('Returns a duration of days', () => {
    expect((1).days).toEqual(new Duration(60 * 60 * 24));
    expect((1).day).toEqual((1).days);
  });

  it('Returns a duration of weeks', () => {
    expect((1).weeks).toEqual(new Duration(60 * 60 * 24 * 7));
    expect((1).week).toEqual((1).weeks);
  });
  
  it('Returns a duration of months', () => {
    expect((1).months).toEqual(new Duration(60 * 60 * 24 * 365 / 12));
    expect((1).month).toEqual((1).months);
  });

  it('Returns a duration of years', () => {
    expect((1).years).toEqual(new Duration(60 * 60 * 24 * 365));
    expect((1).year).toEqual((1).years);
  });
});