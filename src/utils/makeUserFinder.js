'use strict';

export default function makeUserFinder(users) {
  return (userId) => users.find(
    (user) =>
      user.get('id') == userId
  );
}
