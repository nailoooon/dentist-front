import React from 'react';

export const RowItem = (props) => {
    return (<tr>
        <th scope={"row"}>
            {props.name}
        </th>
        <th>
            {props.price}
        </th>
    </tr>)
}