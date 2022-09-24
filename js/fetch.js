const process = (response, cb) => {
  if (!response.ok) {
    throw new Error('Failed to fetch');
  }

  return cb();
};

const getData = (url, onError, onSuccess) => fetch(url)
  .then((response) => process(response, () => response.json()))
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
    .then((result) => process(result, onSuccess))
    .catch((err) => onError(err));
};

export { getData, postData };
