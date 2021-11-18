const BASE_URL = "https://jualuc1.dreamhosters.com/wp-json";
const WP_PATH = "wp/v2";
const BUDDYPRESS_PATH = "buddypress/v1";
const JWT_AUTH_PATH = "jwt-auth/v1";

export const WPAPI_PATHS = {
  wp: {
    posts: `${WP_PATH}/posts`,
    users: `${WP_PATH}/users`,
    media: `${WP_PATH}/media`,
    comments: `${WP_PATH}/comments`,
    categories: `${WP_PATH}/catergories`,
    search: `${WP_PATH}/search`,
    blockTypes: `${WP_PATH}/block-types`,
    blocks: `${WP_PATH}/blocks`,
    pages: `${WP_PATH}/pages`,
  },
  buddypress: {
    members: `${BUDDYPRESS_PATH}/members`,
    activity: `${BUDDYPRESS_PATH}/activity`,
    messages: `${BUDDYPRESS_PATH}/messages`,
  },
  jwtAuth: {
    token: `${JWT_AUTH_PATH}/token`,
  },
};

const isNotEmptyObject = (object) => Object.keys(object).length > 0;
/**
 * helper function to build url with query parameters
 * @param {string} path
 * @param {Object} params
 * @returns string
 */
const buildQueryUrl = (path, params = {}) => {
  const paramsPairs = Object.entries(params);
  // removes slash (/) from end of path if one exists
  const trimmedPath = path.endsWith("/") ? path.slice(0, -1) : path;
  const initialUrl = `${BASE_URL}/${trimmedPath}?`;

  const builtUrl = paramsPairs.reduce((urlAccumulator, [key, value], i) => {
    // append query separator (&) if we are not at the final param iteration
    const querySeparator = i < paramsPairs.length - 1 ? "&" : "";
    return urlAccumulator + `${key}=${value}${querySeparator}`;
  }, initialUrl);
  // return example:
  // https://jualuc1.dreamhosters.com/wp-json/wp/posts?firstKey=firstValue&secondKey=secondValue
  return builtUrl;
};

/**
 * wordpress API fetch function
 * @return {Promise} response
 * example use: wpApiFetch({ path: WPAPI_PATHS.posts }) returns Promise for wordpress posts array
 */
export const wpApiFetch = async ({
  path,
  queryParams = {},
  data,
  method = "GET",
  token,
}) => {
  const buildHeaders = () => {
    if (token) {
      return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
    }
    return {
      "Content-Type": "application/json",
    };
  };

  const options = {
    method,
    headers: buildHeaders()
  }
  options.body=data? JSON.stringify(data) : null;
  const url = isNotEmptyObject(queryParams)
    ? buildQueryUrl(path, queryParams)
    : `${BASE_URL}/${path}`;

  try {
    const response = await fetch(url, options);
    return response.json();
  } catch (error) {
    // any error handling code goes here
    console.error("wpApiFetch() error\n", error);
  }
};

/** the old fetch functions */
export const posts = () => {
  return fetch(`${BASE_URL}/wp/v2/posts`).then((response) => response.json());
};

export const users = () => {
  return fetch(`${BASE_URL}/wp/v2/users`).then((response) => response.json());
};

export const media = () => {
  return fetch(`${BASE_URL}/wp/v2/users`).then((response) => response.json());
};
