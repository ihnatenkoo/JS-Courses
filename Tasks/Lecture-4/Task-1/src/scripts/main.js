// import fetch from 'cross-fetch';

const sortByCategory = (a, b) => {
  const categoryA = a.category.toLowerCase();
  const categoryB = b.category.toLowerCase();

  if (categoryA > categoryB) {
    return 1;
  }

  if (categoryA < categoryB) {
    return -1;
  }

  return 0;
};

const sortByPrice = (a, b) => b.price - a.price;

export const getData = async (url) => {
  try {
    const response = await fetch(url);

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }

};

const sortData = async () => {
  const productsList = await getData('https://fakestoreapi.com/products');

  const sortPrice = [...productsList].sort(sortByPrice);
  const sortPriceAndCategory = sortPrice.sort(sortByCategory);

  return sortPriceAndCategory;
};