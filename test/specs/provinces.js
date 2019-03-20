import { all, findById, findByIso } from '../../src/provinces';

describe('provinces', () => {
  it('should export all provinces', () => {
    expect(all).to.be.an('array').that.is.not.empty;
  });

  context('findById', () => {
    it('should find a province by identifier (case-insensitive)', () => {
      const ontario = findById('CAN-ON');
      expect(ontario).to.exist;
      expect(ontario).to.have.property('name', 'Ontario');
      expect(findById('can-on')).to.deep.equal(ontario);
      expect(findById('cAn-oN')).to.deep.equal(ontario);
      expect(findById('Can-oN')).to.deep.equal(ontario);
    });

    it('should return undefined for unmatched identifiers', () => {
      expect(findById('FAKE-FAKE')).to.be.undefined;
    });

    it('should return undefined for unespecified identifier', () => {
      expect(findById()).to.be.undefined;
    });
  });

  context('findByIso', () => {
    it('should find a province by ISO 3166-2 code (case-insensitive)', () => {
      const ontario = findByIso('ON');
      expect(ontario).to.exist;
      expect(ontario).to.have.property('name', 'Ontario');
      expect(findByIso('on')).to.deep.equal(ontario);
      expect(findByIso('On')).to.deep.equal(ontario);
      expect(findByIso('oN')).to.deep.equal(ontario);
    });

    it('should return undefined for unmatched ISO codes', () => {
      expect(findByIso('FAKE-FAKE')).to.be.undefined;
    });

    it('should return undefined for unespecified ISO codes', () => {
      expect(findByIso()).to.be.undefined;
    });
  });
});
