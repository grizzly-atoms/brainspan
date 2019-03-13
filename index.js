const Duration = require('./Duration');
const mixins = require('./mixins');

class BrainSpan {
  constructor() {
    this.Duration = Duration;
    this.mixins = mixins;
  }

  enableMixins() {
    this.mixins.numeric.NumericDuration.extend(Number.prototype);
    return this;
  }
}

module.exports = new BrainSpan();
