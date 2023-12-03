import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faTrash } from '@fortawesome/free-solid-svg-icons'
import './Search.css'

const SearchBox = (props) => {
    const [initialUsers, updateInitialUsers] = useState(props.users)
    const updateUsers = props.updateSearch
    const [searchTerm, setSearchTerm] = useState('');
    
    const handleInputChange = (e) => {
        let query = e.target.value.toLowerCase();
        let filteredUsers;
        setSearchTerm(query)

        filteredUsers = props.users.filter(
            user =>
                user.id.toLowerCase().includes(query) ||
                user.name.toLowerCase().includes(query) ||
                user.email.toLowerCase().includes(query) ||
                user.role.toLowerCase().includes(query)
        );

        console.log(filteredUsers);
        updateInitialUsers(filteredUsers)
        updateUsers(filteredUsers);
    };

    // const handleKeyPress = (e) => {
    //     if (e.key === 'Enter') {

    //     }
    // };


    return (
        <div className="header-elements">
            <div className="search-box-container">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleInputChange}
                    className="search-input"
                />
                <div className="search-icon">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </div>
            <div className="deleteIcon">
                <div className="search-icon-delete">
                    <FontAwesomeIcon icon={faTrash} />
                </div>
            </div>
        </div>
    );
};

export default SearchBox;
