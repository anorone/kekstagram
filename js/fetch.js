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

const postData = (data, url, onError, onSuccess) => {
  const response = fetch(url, {
    method: 'POST',
    body: data,
  });

  return response
    .then((result) => {
      if (!result.ok) {
        throw new Error('Failed to fetch');
      }

      return onSuccess(result);
    })
    .catch((err) => onError(err));
};

export { getData, postData };
