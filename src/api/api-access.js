class ApiAccess {
  requestApi = (url, params = {}, method = 'GET') => {
    let newUrl = url;
    const options = {
      method,
      headers: {
        Accept: '*/*',
      },
    };
    if (method === 'GET') {
      newUrl += `?${(new URLSearchParams(params)).toString()}`;
    } else {
      options.body = JSON.stringify(params);
    }

    return fetch(newUrl, options);
  };

  getApi = async (url, params, callback) => {
    const response = await this.requestApi(url, params, 'GET');
    if (response.ok) {
      if (callback !== undefined) {
        callback();
      }
      return response.json();
    }
    return '';
  };

  postApi = async (url, params, callback) => {
    const response = await this.requestApi(url, params, 'POST');
    if (callback !== undefined && response.ok) {
      callback();
    }
    return response;
  };
}

const access = new ApiAccess();
export { access, ApiAccess };
