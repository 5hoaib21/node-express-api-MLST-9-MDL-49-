import UserList from '@/components/UserList';
import React, { Suspense } from 'react';

const getUsers = async () => {
  const res = await fetch('http://localhost:8000/users')
  return res.json()
}
const Users2Page = async() => {
  const usersPromise =  getUsers()
  return (
    <div>
      <h2>Users2 with suspense </h2>
      <Suspense fallback={<div>loading...</div>}>
        <UserList usersPromise={usersPromise}></UserList>
      </Suspense>
    </div>
  );
};

export default Users2Page;