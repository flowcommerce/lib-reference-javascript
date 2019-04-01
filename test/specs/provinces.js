import * as provinces from '../../src/provinces';
import * as reference from '../../src';

describe('provinces', () => {
  it('should export all provinces', () => {
    expect(provinces.all).to.be.an('array').that.is.not.empty;
  });

  it('should be top-level export', () => {
    expect(reference).to.have.property('provinces', provinces);
  });

  context('findById', () => {
    it('should find a province by identifier (case-insensitive)', () => {
      const ontario = provinces.findById('CAN-ON');
      expect(ontario).to.exist;
      expect(ontario).to.have.property('name', 'Ontario');
      expect(provinces.findById('can-on')).to.deep.equal(ontario);
      expect(provinces.findById('cAn-oN')).to.deep.equal(ontario);
      expect(provinces.findById('Can-oN')).to.deep.equal(ontario);
    });

    it('should return undefined for unmatched identifiers', () => {
      expect(provinces.findById('FAKE-FAKE')).to.be.undefined;
    });

    it('should return undefined for unespecified identifier', () => {
      expect(provinces.findById()).to.be.undefined;
    });
  });

  context('findByIso', () => {
    it('should find a province by ISO 3166-2 code (case-insensitive)', () => {
      const ontario = provinces.findByIso('ON');
      expect(ontario).to.exist;
      expect(ontario).to.have.property('name', 'Ontario');
      expect(provinces.findByIso('on')).to.deep.equal(ontario);
      expect(provinces.findByIso('On')).to.deep.equal(ontario);
      expect(provinces.findByIso('oN')).to.deep.equal(ontario);
    });

    it('should return undefined for unmatched ISO codes', () => {
      expect(provinces.findByIso('FAKE-FAKE')).to.be.undefined;
    });

    it('should return undefined for unespecified ISO codes', () => {
      expect(provinces.findByIso()).to.be.undefined;
    });
  });
});
