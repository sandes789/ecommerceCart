import React, {createContext, useState, useEffect} from 'react'
import {v1 as uuid} from 'uuid'

export const DataContext = createContext();

const DataContextProvider = (props) => {

    const [items, setItems] = useState([
        {name:'iPhone 7++',price: 200, qty: 3, id:1 },
        {name:'Laptop',price: 100, qty: 2, id:2 },
        {name:'Guitar',price: 300, qty: 1, id:3 },
    ])

    // useEffect(() => {
    //     localStorage.setItem('items',JSON.stringify(items))
    // },[items])

      
    const addItems = (name,price,qty) => {
        setItems([...items,{name:name,price:price,qty:qty, id:uuid()}])
    }

    const removeItems = (id) => {
        setItems(
            items.filter(item => 
                {
                   return item.id !== id
                })
        )
    }

    return(
        <DataContext.Provider value={{items, addItems, removeItems}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider