import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import './UserItem.css'

function UserItem(props) {
    const { id, name, email, role } = props.user;

    return (

        <tr key={id}>
            <td>
                <input type="checkbox"
                    onClick={
                        props.toggleCheckbox
                    } 
                />
            </td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{role}</td>

            <td>
                <FontAwesomeIcon
                    icon={faPenToSquare}
                />
                <FontAwesomeIcon
                    icon={faTrash}
                />
            </td>
        </tr>
    );
}

export default UserItem;
