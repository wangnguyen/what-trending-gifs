import 'whatwg-fetch';

const domain = 'https://api.giphy.com';
const apiKey = 'sJyyXZhYbcyEpNBKWzi2ykt92ucGzkX0';

function objectToURLParams(obj = {}) {
  return Object.keys(obj).map(key => (`${key}=${obj[key]}`)).join('&');
}

const fetchData = (url, params, method = 'GET') => {
  switch (method) {
    case ('POST'):
    case ('GET'):
    default: {
      const urlParams = objectToURLParams(params);
      const fullURL = `${domain}${url}?api_key=${apiKey}&${urlParams}`;
      return fetch(fullURL).then(res => res.json());
    }
  }
};

export default fetchData;
