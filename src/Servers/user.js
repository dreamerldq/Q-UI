import { request_get, request_post } from '../../utils/api';

async function checked_login(config) {
  const result = await request_post('user/checked_user', config);
  return result;
}

async function create_user(config) {
  const result = await request_post('user/create_user', config);
  return result;
}

async function edit_user(config) {
  const result = await request_post('user/edit_user', config);
  return result;
}

async function get_user(config) {
  const result = await request_post('user/get_user', config);
  return result;
}
export {
  checked_login, create_user, edit_user, get_user,
};
