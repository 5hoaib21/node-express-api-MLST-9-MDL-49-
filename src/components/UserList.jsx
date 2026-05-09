import React, { use } from 'react';

const UserList = ({usersPromise}) => {
  const users = use(usersPromise)

  return (
    <div>
      <h2>Users {users.length}</h2>
      
    </div>
  );
};

export default UserList;