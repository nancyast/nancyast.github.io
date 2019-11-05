const request = (url, params) => {
  return fetch(url, params).then(response => response.json());
};

export function getCollection() {
  const url = `https://images-api.nasa.gov/search?q=''`;

  return request(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export function toggleFavorite(id) {
  const items = JSON.parse(window.localStorage.getItem('items'));
  const favoriteItems = items.map(item => {
    if (item.nasa_id === id) {
      return {
        ...item,
        favorite: !item.favorite
      };
    }

    return item;
  });

  window.localStorage.setItem('items', JSON.stringify(favoriteItems));

  return favoriteItems;
}

export function editItem(target) {
  const items = JSON.parse(window.localStorage.getItem('items'));

  const edittedItems = items.map(item =>
    item.nasa_id === target.nasa_id ? target : item
  );

  window.localStorage.setItem('items', JSON.stringify(edittedItems));

  return edittedItems;
}

export function deleteItem(id) {
  const items = JSON.parse(window.localStorage.getItem('items'));

  const remainItems = items.filter(item => item.nasa_id !== id);

  window.localStorage.setItem('items', JSON.stringify(remainItems));

  return remainItems;
}
