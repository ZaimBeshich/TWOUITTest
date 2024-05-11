const url = 'http://localhost:3000';

export const getProducts = async (opts = {}) => {
  const data = await fetch(`${url}/products`, {...opts, method: 'GET'})
    .then(response => response.json())
    .catch(error => console.error('\n getProducts err: ', error));

  return data;
};

export const getCart = async (opts = {}) => {
  const data = await fetch(`${url}/cart`, {...opts, method: 'GET'})
    .then(response => response.json())
    .catch(error => console.error('\n getCart err: ', error));

  return data;
};

export const addToCart = async (opts = {}) => {
  await fetch(`${url}/cart`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(opts),
  }).catch(e => console.error(e));
};
