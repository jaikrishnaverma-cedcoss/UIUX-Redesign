import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
// import { createContext } from 'react';

export const UserContext = React.createContext();
function App() {
  
  let [state,setState]=useState({store:[{id:1,name:"Pomegranate (Anaar)",gram:"500 gm",price:60,offer:"5",pic:"Pomegranate (Anaar).jpg"},{id:2,name:"Pineapple",gram:"1 Unit",price:"85",offer:"6",pic:"Pineapple-w@d.jpg"},{id:3,name:"Kiwi - Imported",gram:"2 unit",price:"120",offer:"25",pic:"Kiwi - Imported-w@d.jpg"},{id:4,name:"Papaya",gram:"1 Kg",price:"70",offer:"0",pic:"potato.jpg"},{id:5,name:"Shandong Pear",gram:"500 gm",price:"50",offer:"5",pic:"onion.jpg"}],cart:[]})
  
  const AddCart=(newData)=>{
    let newArr = { ...newData, quantity: 1,total:newData.price }
    let foundValue = -1
    state.cart.map((x, i) => { if (newData.id === x.id) { foundValue = i } return "" });
    if (foundValue === -1){
      state.cart.push({...newArr})
      setState({...state,cart:[...state.cart]})
    }
    else{
     state.cart[foundValue].quantity += 1
     state.cart[foundValue].total =state.cart[foundValue].quantity*state.cart[foundValue].price
     setState({...state})
      // alert("Item Added to Cart Successfully..!")
      console.log("cart", state.cart)
    }
  
  }
  const empty = (index) => {
  setState({cart:[]})
  }

 const remove = (index) => {
    this.state.cart.splice(index, 1)
    this.setState({...state})
    // setCart([...cart])
  }
  
 const incrDecr = (boolVal, index) => {
  let foundValue=-1;
  
  state.cart.map((x, i) => { if (index=== x.id) { foundValue = i } return "" });
index=foundValue
  if(foundValue!==-1)
  {  
    (boolVal) ? state.cart[index].quantity += 1 : (state.cart[index].quantity - 1 === -1) ? state.cart[index].quantity = state.cart[index].quantity : state.cart[index].quantity -= 1;
    console.log(state.cart)
    setState({...state})
  }

    

  }

  return (
    <div className="App">
     <UserContext.Provider value={{state,AddCart,incrDecr}}>
     <Sidebar/>
     </UserContext.Provider>
    </div>
  );
}

export default App;
