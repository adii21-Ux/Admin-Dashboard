import React from 'react'
import UserItem from './UserItem';
import { useState } from 'react';
import './UserList.css'

function UserList(props) {
    const users = props.users

    // const toggleAllCheckboxes = (event) => {
    //     const isChecked = event.target.checked;
    //     const selectedUsers = isChecked ? users.map(user => user.id) : [];
    //     selectedUsers.forEach(element => {
    //         props.updateSelectedUsers(element)
    //     });
    // };

    const toggleSingleCheckbox = (userId) => {
        props.updateSelectedUsers(userId)
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>
                            <input type="checkbox"
                                // onChange={toggleAllCheckboxes}
                            />
                        </td>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => {
                        return <UserItem key={user.id} user={user} toggleCheckbox={toggleSingleCheckbox} />
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default UserList