import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

const ItemList = ({lists}) => {
    const {removeItems} = useContext(DataContext)

    return(
        <div className="list-items">
            <li>
                <p>{lists.name}</p>
                <p>{lists.price}</p>
                <p>{lists.qty}</p>
                <p><b>{lists.price * lists.qty}</b></p>
                <p> <span className="delete" onClick={(e) =>removeItems(lists.id)}>Delete</span> <span className="edit" >Edit</span></p>
            </li>
        </div>
    )
}

export default ItemList