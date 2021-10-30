const BASE_URL = 'https://jualuc1.dreamhosters.com/wp-json';

export const WPAPI_PATHS = {
  posts: `${BASE_URL}/wp/v2/posts`,
  users: `${BASE_URL}/wp/v2/users`,
  media: `${BASE_URL}/wp/v2/media`,
}

/**
 * wordpress API fetch function
 * @param {Promise} response
 * example use: wpApiFetch({ path: WPAPI_PATHS.posts }) returns Promise for wordpress posts array
 */
export const wpApiFetch = async ({ path, data, method = 'GET' }) => {
  try {
    const response = await fetch(path, { method, body: JSON.stringify(data) });
    return response.json();
  } catch(error) {
    // any error handling code goes here
    console.error('wpApiFetch() error\n', error);
  }
}

export const posts = () => {
  return fetch(`${BASE_URL}/wp/v2/posts`).then(response => response.json());
}

export const users = () => {
  return fetch(`${BASE_URL}/wp/v2/users`).then(response => response.json());
}

export const media = () => {
  return fetch(`${BASE_URL}/wp/v2/users`).then(response => response.json());
}