export const getData = async (url) => {
  try {
    const response = await fetch(url);

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const sortByPrice = (a, b) => b.price - a.price;

const sortByCategory = (a, b) => a.category.localeCompare(b.category);

const sortData = async () => {
  const productsList = await getData('https://fakestoreapi.com/products');

  return productsList.sort(sortByPrice).sort(sortByCategory);
};


