import React, {useContext, useState} from 'react'
import { DataContext } from '../context/DataContext'

const AddItems = () => {
    const {actions} = useContext(DataContext)
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [qty, setQty] = useState()
    const handlerSubmit = (e) => {
        e.preventDefault()
        actions.addItems(name,price,qty)
        setName('')
        setPrice('')
        setQty('')
    }
    return(
        <div className="add-items">
            <form onSubmit={handlerSubmit}>
                <input type="text" placeholder="Items Name" value={name} required onChange={(e) => setName(e.target.value)}/>
                <input type="number" placeholder="Price" value={price} required onChange={(e) => setPrice(e.target.value)}/>
                <input type="number" placeholder="Quantity" value={qty} required onChange={(e) => setQty(e.target.value)}/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default AddItems