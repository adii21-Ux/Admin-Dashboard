import React from 'react'

function Selected(props) {
    const totalUsers = props.totalUsers;
    const selectedUsers = props.selectedUsers;

    return (
        <div className='selected'>
            {selectedUsers ? selectedUsers : 0} of {totalUsers} selected
        </div>
    );
}


export default Selected