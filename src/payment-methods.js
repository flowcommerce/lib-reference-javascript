import paymentMethods from '../data/payment-methods.json';
import findWhere from './helpers/findWhere';

const findById = id => findWhere(paymentMethods, paymentMethod => paymentMethod.id === id);

const findByName = name => findWhere(paymentMethods, paymentMethod =>
  paymentMethod.name.toLowerCase() === name.toLowerCase());

export { paymentMethods as all, findById, findByName };
