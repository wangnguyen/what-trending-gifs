import 'whatwg-fetch';

const url = 'https://api.giphy.com/'; // v1/gifs/trending
const apiKey = 'sJyyXZhYbcyEpNBKWzi2ykt92ucGzkX0';

const objectToURLParams = (obj) => {
  let str = '';
  for (const key in obj) {
    if (str != '') {
      str += '&';
    }
    str += `${key}=${encodeURIComponent(obj[key])}`;
  }
  return str;
};

const fetchData = (url, params, method = 'GET') => {
  switch (method) {
    case ('POST'):
    case ('GET'):
    default:
      const urlParams = objectToURLParams(params);
      const fullURL = `${url}?api_key=${apiKey}&${urlParams}`;
      return fetch(fullURL);
  }
};

export default fetchData;
