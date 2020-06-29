import React, {useContext} from 'react'
import { DataContext } from '../context/DataContext'
import ItemList from './ItemList'

const Card = () => {
    const {items} = useContext(DataContext);

    let sum = 0
    items.forEach(item => {
        sum += item.price * item.qty;
      });

      

    
    

    return items.length ? (
        <div className="card">
            
            <ul>
                <li>
                    <p><b>Name</b></p>
                    <p><b>Price</b></p>
                    <p><b>Qty</b></p>
                    <p><b>Total </b></p>
                    <p><b>Action</b></p>

                </li>
                {items.map(list => {
                    return(
                        <ItemList key={list.id} lists={list}/>
                    )
                })}
            </ul>
            <h4>Grand Total: {sum}</h4>
            
        </div>
    ) :
    (
        <p>Items Is empty</p>
    )
}

export default Card