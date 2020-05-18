import React from 'react'
import Items from './Components/Items'
import Inventory from './Components/Inventory'
import YourCart from './Components/YourCart'

class App extends React.Component{

  constructor() {
    super();
    this.state = {
      items: {},
      order: {}
    };
  }

  addItem(items) {

    const stuffs = {...this.state.stuffs};
    const timestamp = Date.now(); 
  }
  render(){
    return(
      <div className = 'shopkart'>
        <div className="menu">
          <Items tagline = "gem t1 sales"/>
           </div>
           <YourCart></YourCart>
           <Inventory/>
          </div>

    )
  }
}

export default App