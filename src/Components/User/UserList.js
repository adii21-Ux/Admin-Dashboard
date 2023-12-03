import React from 'react'
import UserItem from './UserItem';
import './UserList.css'

function UserList(props) {
    const users = props.users
    
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