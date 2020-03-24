import React from 'react';
import './App.css';
import ProductList from "../ProductList/ProductList";
import NewProd from "../NewProd/NewProd";

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <ProductList />
    </div>
  );
  }
}

export default App;
