import { all, findById, findByName } from '../../src/payment-methods';

describe('payment methods', () => {
  it('should export all payment methods', () => {
    expect(all).to.be.an.array;
    expect(all).to.not.be.empty;
  });

  it('should find one by identifier', () => {
    expect(findById('paypal')).to.have.property('name', 'PayPal');
  });

  it('should find one by name (case-insensitive)', () => {
    expect(findByName('pAyPaL')).to.have.property('name', 'PayPal');
  });
});
