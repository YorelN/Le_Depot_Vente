import { Meteor } from 'meteor/meteor';

export function login(root, { credentials }, context) {
  const { email, password } = credentials;

  console.log(Meteor);
  Meteor.loginWithPassword(email, password, err => {
    console.log(err);
  });

  return {};
}
