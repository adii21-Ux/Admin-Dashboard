import React from 'react';
import UserList from './User/UserList';
import './Main.css'
import SearchBox from './Search/Search';
import { useEffect, useState } from 'react';
import Paginate from './Paginate/Paginate';

function Main() {
  const [users, setUsers] = useState([])

  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage] = useState(10);

  const lastIndex = currentPage * usersPerPage;
  const firstIndex = lastIndex - usersPerPage;
  const currentUsers = users.slice(firstIndex, lastIndex);

  useEffect(() => {

    fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
      .then((response) => response.json())
      .then((jsonData) => {
        setUsers(jsonData)
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(users.length / usersPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className='container'>
      <div className="header">
        <SearchBox />
      </div>
      <div className="userList">
        <UserList users={currentUsers} />
      </div>
      <div className="footer">
        <Paginate
          postsPerPage={usersPerPage}
          totalPosts={users.length}
          currentPage={currentPage}
          paginate={paginate}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      </div>
    </div>
  );
}

export default Main;