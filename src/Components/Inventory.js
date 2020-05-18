import React from 'react';
import AddItem from './AddItem';

const Inventory = () =>{
            return(
            <div>
            <h2>Inventory</h2>
            <AddItem addItem = {this.addItem}/>
            <button onClick = {this.loadItems }>Load Items</button>
            </div>
            )
    }

export default Inventory;