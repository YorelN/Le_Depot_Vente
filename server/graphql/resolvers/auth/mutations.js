import { Meteor } from 'meteor/meteor';

import { Accounts } from 'meteor/accounts-base';

export function me(root, args, context) {
  return { token: context.token };
}
