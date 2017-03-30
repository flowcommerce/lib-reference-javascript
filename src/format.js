/* eslint-disable import/prefer-default-export */
import currencyFormat from '../data/currency-format.json';
import accounting from './vendor/accounting';

/**
 * Localize amount based on locale
 *
 * Will return `amount` back if no format could be applied.
 *
 * @param  {number} amount  value of money (not in cents)
 * @param  {string} locale The locale in which to localize amount
 */
export function currency(amount, locale) {
  const accountingConfig = currencyFormat[locale];

  if (accountingConfig) {
    return accounting.formatMoney(amount, accountingConfig);
  }

  return amount;
}
