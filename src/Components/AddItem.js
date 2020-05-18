import React from 'react';

class AddItem extends React.Component{
    createItem(event){
        event.preventDefault();
        console.log("Adding Items...");
        const item = {
             name: this.name.value,
             price: this.price.value,
             desc: this.desc.value,
             image: this.image.value,
        }
        console.log(item);
        this.props.addItem(item);
        this.itemForm.reset();
    }
   
   
    render(){
        return(
            <form ref = {(input) => this.itemForm = input} className="item-edit" onSubmit={(e)=> this.createItem(e)}>
            <input ref={(input) => this.name = input} type="text" placeholder="Item Name"/>
            <input ref={(input) => this.price = input}type="text" placeholder="Item Price"/>
            <textarea ref={(input) => this.desc = input}placeholder="Item Desc"/>
            <input ref={(input) => this.image = input} type="text" placeholder="Item Image"/>
            <button type = "submit">+ Add Item</button>  
            </form>    
        )
    } 
}

export default AddItem;