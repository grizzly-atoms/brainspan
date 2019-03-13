// eslint-disable-next-line import/no-unresolved
const { Duration, mixins } = require('brainspan').enableMixins();

const expectedDuration = require('../Duration');
const expectedNumericMixin = require('../mixins/numeric/NumericDurations');

describe('index', () => {
  it('exports it\'s parts', () => {
    expect(Duration).toEqual(expectedDuration);
    expect(new Duration(123) instanceof Duration).toBeTruthy();
    expect(mixins.numeric.NumericDuration).toEqual(expectedNumericMixin);
    expect((1).minute).toEqual({ seconds: 60 });
  });
});
