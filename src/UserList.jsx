import React from 'react';
import './UserList.css'; // Import the CSS file
import './App.css'
const UserList = ({ user }) => {
  return (
    <div className='card'>
      <h1 >{user.name}</h1>
      <h2>{user.username}</h2>
      <h2>{user.email}</h2>
      <div className='address'>
        <h3>{user.address.street}</h3>
        <h3>{user.address.suite}</h3>
        <h3>{user.address.city}</h3>
        <h3>{user.address.zipcode}</h3>
      </div>
      <div className='address geo'>
        <h2>{user.address.geo.lat}</h2>
        <h2>{user.address.geo.lng}</h2>
      </div>
    </div>
  );
};

export default UserList;
