const BASE_URL = 'https://jualuc1.dreamhosters.com/wp-json';
const WP_PATH = '/wp/v2';
const BUDDYPRESS_PATH = '/buddypress/v1';

export const WPAPI_PATHS = {
  wp: {
    posts: `${BASE_URL}${WP_PATH}/posts`,
    users: `${BASE_URL}${WP_PATH}/users`,
    media: `${BASE_URL}${WP_PATH}/media`,
    comments: `${BASE_URL}${WP_PATH}/comments`,
    categories: `${BASE_URL}${WP_PATH}/catergories`,
    search: `${BASE_URL}${WP_PATH}/search`,
    blockTypes: `${BASE_URL}${WP_PATH}/block-types`,
    blocks: `${BASE_URL}${WP_PATH}/blocks`,
  },
  buddypress: {
    members: `${BASE_URL}${BUDDYPRESS_PATH}/members`,
    activity: `${BASE_URL}${BUDDYPRESS_PATH}/activity`,
  }
}

const urlBuilder = ( path, params = {} ) => {
  let url = path;
  for (let key in params) {
    url += `${key}=${params[key]}`
  }
  return url;
}

/**
 * wordpress API fetch function
 * @param {Promise} response
 * example use: wpApiFetch({ path: WPAPI_PATHS.posts }) returns Promise for wordpress posts array
 */
export const wpApiFetch = async ({ path, params, data, method = 'GET' }) => {
  try {
    const response = await fetch(path, { method, body: JSON.stringify(data) });
    return response.json();
  } catch(error) {
    // any error handling code goes here
    console.error('wpApiFetch() error\n', error);
  }
}

/** the old fetch functions */
export const posts = () => {
  return fetch(`${BASE_URL}/wp/v2/posts`).then(response => response.json());
}

export const users = () => {
  return fetch(`${BASE_URL}/wp/v2/users`).then(response => response.json());
}

export const media = () => {
  return fetch(`${BASE_URL}/wp/v2/users`).then(response => response.json());
}