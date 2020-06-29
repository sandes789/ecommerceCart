import React, {createContext, useState, useEffect} from 'react'
import {v1 as uuid} from 'uuid'

export const DataContext = createContext();

const KEY = 'ECOMMERCE_CART_ITEMS';

const DataContextProvider = (props) => {

    const [items, setItems] = useState([
        {name:'iPhone 7++',price: 200, qty: 3, id:1 },
        {name:'Laptop',price: 100, qty: 2, id:2 },
        {name:'Guitar',price: 300, qty: 1, id:3 },
    ])

    useEffect(() => {
        localStorage.setItem(KEY,JSON.stringify(items))
    },[items])

    useEffect(() => {
        const persistedItems = JSON.parse(localStorage.getItem(KEY));
        if (persistedItems) setItems(persistedItems);
    }, []);

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

    const actions = {
        addItems,
        removeItems,
    }

    return(
        <DataContext.Provider value={{items, actions}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider