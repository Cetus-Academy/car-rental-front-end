const prefix = '/lista-samochodow';
const prefixShop = '/sklep';
export const routes = {
  cars: `${prefix}`,
  car: (id = ':carSlug') => `${prefix}/${id}`,
  calculator: '/kalkulator',
  carCalculator: (id = ':carSlug') => `/kalkulator/${id}`,
  shop: `${prefixShop}`,
  shoppingCart: `${prefixShop}/koszyk`,
  regulations: '/regulamin',
  privacy_policy: '/polityka-prywatnosci',
};
