import React from "react";
import { Link, Outlet } from "react-router-dom";
function UserId() {
  const users = [
    {id: 1, name: 'User 1 details'},
    {id: 2, name: 'User 2 details'},
    {id: 3, name: 'User 3 details'},
  ]

  return (
    <div>
      {users.map((item) => (
        <Link to={`/userId/${item.id}`} key={item.id}><h5>{item.name}</h5></Link>
      ))}
      <Outlet />
    </div>
  );
}
export default UserId