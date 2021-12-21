import _ from 'lodash';

export const selectComments = state => _.get(state, 'comments.data', []);
export const rotatingSelector = state => _.get(state, 'rotating', false);
export const selectSessionAuthentication = state => _.get(state, 'session.authenticated', false);
export const currentUser = state => _.get(state, 'session.user', {});