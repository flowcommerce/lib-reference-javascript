import { currency } from '../../src/format';

describe('format', () => {
  it('should format based on locale', () => {
    const result = currency(1200.00, 'en-AU');
    expect(result).to.equal('A$1,200.00');
  });

  it('should format based on locale and symbol narrow option', () => {
    const result = currency(1200.00, 'en-AU', { symbol: 'narrow' });
    expect(result).to.equal('$1,200.00');
  });

  it('should format based on locale and symbol narrow option', () => {
    const result = currency(2000.00, 'en-AU', { symbol: 'narrow' });
    expect(result).to.equal('$2,000.00');
  });

  it('should format based on locale and symbol primary option', () => {
    const result = currency(1200.00, 'en-AU', { symbol: 'primary' });
    expect(result).to.equal('A$1,200.00');
  });

  it('should format based on locale and label_formatters option', () => {
    const options = {
      symbol: 'narrow',
      label_formatters: ['strip_trailing_zeros'],
    };

    expect(currency(1200.00, 'en-AU', options)).to.equal('$1,200');
    expect(currency(2000.00, 'en-AU', options)).to.equal('$2,000');
    expect(currency(1200.00, 'de', options)).to.equal('€1.200');
  });

  it('REGRESSION: it should format based on es-AR locale', () => {
    const result = currency(16409, 'es-AR');
    expect(result).to.equal('ARS16.409,00');
  });
});
