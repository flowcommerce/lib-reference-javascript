/* eslint-disable import/prefer-default-export */
import currencyFormat from '../data/currency-format.v2.json';
import accounting from './vendor/accounting';

export function endsWith(baseString, searchString) {
  return baseString.substring(baseString.length - searchString.length) === searchString;
}

const formatters = {
  strip_trailing_zeros: (value) => {
    if (value && (endsWith(value, '.00') || endsWith(value, ',00'))) {
      return value.substring(0, value.length - 3);
    }

    return value;
  },
};

function getFormatterFunctions(labelFormatters = []) {
  const funcs = [];

  labelFormatters.forEach((formatterKey) => {
    const func = formatters[formatterKey];
    if (func) {
      funcs.push(func);
    }
  });

  return funcs;
}

function createAccountingConfig(locale, options) {
  const formatConfig = currencyFormat[locale];

  if (!formatConfig) {
    return undefined;
  }

  const symbolOpt = formatConfig.symbol[options.symbol] || formatConfig.symbol.primary;

  return {
    // This is a correction for the wrong `formatConfig` coming from json-reference
    // Intentionally left above the spread to automatically prefer the `thousand` propery
    // if it eventually comes from `currency-format.v2.json`.
    thousand: formatConfig.group,
    ...formatConfig,
    symbol: symbolOpt,
  };
}

/**
 * Localize amount based on locale
 *
 * Will return `amount` back if no format could be applied.
 *
 * TODO: document options
 *
 * @param  {number} amount  value of money (not in cents)
 * @param  {string} locale The locale in which to localize amount
 */
export function currency(amount, locale, options = {}) {
  const accountingConfig = createAccountingConfig(locale, options);

  if (accountingConfig) {
    const formatFunctions = getFormatterFunctions(options.label_formatters);
    return formatFunctions.reduce(
      (result, func) => func(result),
      accounting.formatMoney(amount, accountingConfig),
    );
  }

  return amount;
}
