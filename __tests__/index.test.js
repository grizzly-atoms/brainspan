const { Duration, NumericMixin } = require('brainspan');

const expectedDuration = require('../Duration');
const expectedNumericMixin = require('../NumericMixin');

describe('index', () => {
  it("exports it's parts", () => {
    expect(Duration).toEqual(expectedDuration);
    expect(new Duration(123) instanceof Duration).toBeTruthy();
    expect(NumericMixin).toEqual(expectedNumericMixin);
  });
});