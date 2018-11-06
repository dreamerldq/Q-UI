import { request_get, request_post } from '../../utils/api';

async function create_expend(config) {
  await request_post('expend/create_expend', config);
}
async function delete_expend(config) {
  await request_post('expend/delete_expend', config);
}
async function update_expend_state(config) {
  await request_post('expend/update_expend_state', config);
}
async function expend_list(config) {
  const { data } = await request_get('expend/expend_list', config);
  return data;
}
export {
  create_expend, expend_list, update_expend_state, delete_expend,
};
