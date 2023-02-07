import React from 'react';

const MemberItem = ({member, handleDelete, image}) => {
    return (
        <tr key={member._id}>
            <td><img src={image ? 'data:image/png;base64,' + image : ""} alt={member.image ? member.image : "NO PHOTO"} /></td>
            <td>{member.firstname  + ' '+ member.lastname}</td>
            <td>{'Стоматолог'}</td>
            <td>{member.specialization_name}</td>
            <td>{member.dentistry}</td>
            <td>
                <button onClick={() => handleDelete(member._id)}>Delete</button>
            </td>
        </tr>
    );
};

export default MemberItem;