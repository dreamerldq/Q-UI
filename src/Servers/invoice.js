import { request_get, request_post } from '../../utils/api';

async function apply_invoice(config) {
  await request_post('invoice/create_invoice', config);
}
async function delete_invoice(config) {
  await request_post('invoice/delete_invoice', config);
}
async function update_state(config) {
  await request_post('invoice/update_state', config);
}
async function get_invoice() {
  const { data } = await request_get('invoice/list_invoice');
  return data;
}
async function affirm_invoice(config) {
  await request_post('invoice/affirm_invoice', config);
}
async function affirm_invoice_list(config) {
  const { data } = await request_get('invoice/affirm_invoice_list', config);
  return data;
}
export {
  apply_invoice, get_invoice, delete_invoice, update_state, affirm_invoice, affirm_invoice_list,
};
