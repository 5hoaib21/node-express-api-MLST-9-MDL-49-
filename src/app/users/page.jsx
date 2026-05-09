

const UsersPage = async () => {
const res = await fetch('http://localhost:8000/users')
const users =await res.json()

console.log(users,'users')

  return (
    <div>
      <h2>User:{users.length} </h2>
      <div className="grid grid-cols-3 gap-5
      ">
        {
          users.map(user => <div className="border p-2 rounded-2xl" key={user.id}>
          <h2>{user.name}</h2>
          <h2>{user.email}</h2>

          </div>)
        }
      </div>
    </div>
  );
};

export default UsersPage;