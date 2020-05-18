import React from 'react'
import Items from './Components/Items'
import Inventory from './Components/Inventory'
import YourCart from './Components/YourCart'
import sampleItems from './Components/ItemLists'
class App extends React.Component{

  constructor() {
    super();
    this.addItem = this.addItem.bind(this);
    this.loadItems = this.loadItems.bind(this);
    
    this.state = {
      items: {},
      order: {}
    };
  }

  addItem(item) {

    const stuffs = {...this.state.stuffs};
    stuffs[`item${Date.now()}`] = item;
    this.setState({ stuffs });
  }
  
loadItems(){
  this.setState({
    items: sampleItems
  })
}

  render(){
    return(
      <div className = 'shopkart'>
        <div className="menu">
          <Items tagline = "gem t1 sales"/>
           </div>
           <YourCart></YourCart>
           <Inventory addItem={this.addItem} loadItems= {this.loadItems}/> 
          </div>

    )
  }
}

export default App