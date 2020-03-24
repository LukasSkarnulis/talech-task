import React from 'react';
import './App.css';
import ProductList from "../ProductList/ProductList";
import NewProd from "../NewProd/NewProd";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
            name: "", 
            ean: "", 
            type: "", 
            weight: "", 
            color: "", 
            products: []
    }
};

handleFormSubmit = (e) => {
  e.preventDefault();
  let products = [...this.state.products];

  products.push({
      name: this.state.name,
      ean: this.state.ean,
      type: this.state.type,
      weight: this.state.weight,
      color: this.state.color,
  });
  this.setState({ products, name: "", ean: "", type: "", weight: "", color: "",}
  );
}
handleInputChange = (e) => {
  let input = e.target;
  let name = e.target.name;
  let value = input.value;
  this.setState({[name]: value})
  };

deleteProduct = (delIndex) => {
  let products = [...this.state.products].filter((product, index) => index !== delIndex);
  this.setState({ products });
};
 
render() {
  return (
    <div className="App">
      <ProductList products={this.state.products} deleteProduct={this.deleteProduct}/>
      <NewProd handleFormSubmit={this.handleFormSubmit}
      handleInputChange={this.handleInputChange}
      newName={this.state.name}
      newEan={this.state.ean}
      newType={this.state.type}
      newWeight={this.state.weight}
      newColor={this.state.color} />
    </div>
  );
  }
}

export default App;