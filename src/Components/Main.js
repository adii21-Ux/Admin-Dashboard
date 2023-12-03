import React, { useEffect, useState } from 'react';
import UserList from './User/UserList';
import './Main.css';
import SearchBox from './Search/Search';
import Paginate from './Paginate/Paginate';
import Selected from './User/Selected';

function Main() {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const [currentUsers, setCurrentUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState();

  const fetchData = async () => {
    await fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
      .then((response) => response.json())
      .then((jsonData) => {
        setUsers(jsonData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }

  useEffect(() => {
    fetchData()
  }, []);

  useEffect(() => {
    const lastIndex = currentPage * usersPerPage;
    const firstIndex = lastIndex - usersPerPage;
    setCurrentUsers(users.slice(firstIndex, lastIndex));
  }, [currentPage, users, usersPerPage]);

  useEffect(() => {
    let len = users.length
    setTotalUsers(len)
  }, [users]);

  const updateSelectedUsers = (userId) => {
    setSelectedUsers((prev) =>
      prev.includes(userId) ? prev.filter((elem) => elem !== userId) : [...prev, userId]
    );
  };

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
        <SearchBox users={users} updateSearch={setUsers} />
      </div>
      <div className="userList">
        <UserList users={currentUsers} updateSelectedUsers={updateSelectedUsers} />
      </div>
      <div className="footer">
        <Selected totalUsers={totalUsers} selectedUsers={selectedUsers.length} />
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
