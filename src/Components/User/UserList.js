import React from 'react'
import { useEffect, useState } from 'react';
import UserItem from './UserItem';
import './UserList.css'

function UserList() {
    const [users, setUsers] = useState([])

    useEffect(() => {

        fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
            .then((response) => response.json())
            .then((jsonData) => {
                setUsers(jsonData)
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => {
                        return <UserItem key={user.id} user={user}/>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default UserList