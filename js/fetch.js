const getData = (url, onError, onSuccess) => fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }

    return response.json();
  })
  .then((data) => {
    onSuccess(data);
    return data;
  })
  .catch((err) => onError(err));

const postData = () => {};

export { getData, postData };
