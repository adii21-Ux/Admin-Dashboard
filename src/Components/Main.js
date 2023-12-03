import React from 'react';
import UserList from './User/UserList';
import './Main.css'
import SearchBox from './Search/Search';

function Main() {
  return (
    <div className='container'>
      <div className="header">
        <SearchBox/>
      </div>
      <div className="userList">
        <UserList/>
      </div>
    </div>
  );
}

export default Main;