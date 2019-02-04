import * as types from './actionType';

export function getAddressListWatcher() {
  return { type: types.GET_ADDRESS_LIST_WATCHER, payload: null };
}
export function fillAddressList(list: any) {
  return { type: types.FILL_ADDRESS_LIST, payload: list };
}
export function createContactWatcher(contact: any) {
  return { type: types.CREATE_CONTACT_WATCHER, payload: contact };
}
export function updateContactWatcher(contact: any) {
  return { type: types.UPDATE_CONTACT_WATCHER, payload: contact };
}
export function removeContactWatcher(contact: any) {
  return { type: types.REMOVE_CONTACT_WATCHER, payload: contact };
}
export function changeFilterWatcher(list: any) {
  return { type: types.CHANGED_FILTER_LIST, payload: list };
}
