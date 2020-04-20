import React from 'react'
import Items from './Components/Items'
import Inventory from './Components/Inventory'
import YourCart from './Components/YourCart'

class App extends React.Component{
  render(){
    return(
      <div className = 'shopkart'>
        <div className="menu">
          <Items/>
           </div>
           <YourCart></YourCart>
           <Inventory/>
          </div>

    )
  }
}

export default App