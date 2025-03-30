"use client";
const UserServer = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return (
    <div>
      <h1 className="text-2xl">Users</h1>
      <ul className="grid gap-5 grid-cols-4">
        {data.map((user) => (
          <li className="bg-gray-300 rounded p-8 text-black ">
            <h2>name : {user.name}</h2>
            <p>Email : {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserServer;
