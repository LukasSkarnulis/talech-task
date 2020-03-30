import React from 'react';
import './App.css';
import ProductList from "../ProductList/ProductList";
import NewProd from "../NewProd/NewProd";
import ViewProd from "../ViewProd/ViewProd";
import EditProd from "../EditProd/EditProd";
import {BrowserRouter, Route} from "react-router-dom";
import LowWidthList from '../LowWidthList/LowWidthList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
            redirect: false,
            name: "", 
            ean: "", 
            type: "", 
            weight: "", 
            color: "", 
            active: false,
            products: [{name: "Cabbage", ean: "00000000", type: "Vegetable", weight: "2kg", color: "Green", active: false}, 
            {name: "Banana", ean: "111111111", type: "Fruit", weight: "0.3kg", color: "Yellow", active: false}, 
            {name: "Chocolate", ean: "22222222222", type: "Candy", weight: "0.2kg", color: "Brown", active: false}, 
            {name: "Orange", ean: "3333333333", type: "Fruit", weight: "0.5kg", color: "Orange", active: false}, 
            {name: "Cucumber", ean: "4444444444", type: "Vegetable", weight: "1kg", color: "Green", active: false}, ]
    };
};
componentDidMount() {
  let localData = JSON.parse(localStorage.getItem("products"));
  console.log(localData);
  this.setState({products: localData})
}
setToLocalStorage() {
  localStorage.setItem("products", JSON.stringify(this.state.products));
}
handleFormSubmit = (e) => {
  if (!this.canBeSubmitted()) {
    e.preventDefault();
    return alert("Please fill all empty text spaces");
  } 
  e.preventDefault();
  let products = [...this.state.products];
  products.push({
      name: this.state.name,
      ean: this.state.ean,
      type: this.state.type,
      weight: this.state.weight,
      color: this.state.color,
      active: false,
  });
  this.setState({ redirect: true, products, 
    name: "", ean: "", type: "", weight: "", color: "", active: false},
    () => {this.setState({redirect: false})}
  );
}
handleEditFormSubmit = (index, e) => {
  if (!this.canBeSubmitted()) {
    e.preventDefault();
    return alert("Please fill all empty text spaces");
  } 
  e.preventDefault();
  let products = [...this.state.products];
  products.splice(index, 1, {name: this.state.name,
    ean: this.state.ean,
    type: this.state.type,
    weight: this.state.weight,
    color: this.state.color,
    active: false})
  this.setState({ redirect: true, products, name: "", ean: "", type: "", weight: "", color: "", active: false}, 
  () => this.setState({redirect: false})
  );
  }
canBeSubmitted() {
  const {name, ean, type, weight, color} = this.state;
  return (name.length > 0 && 
    ean.length > 0 && 
    type.length > 0 && 
    weight.length > 0 && 
    color.length > 0
  )
}
handleInputChange = (e) => {
    this.setState({...this.state,
    [e.target.name]: e.target.value})
  };
deleteProduct = (delIndex) => {
  let products = [...this.state.products].filter((product, index) => index !== delIndex);
  this.setState({ products },
    () => this.setToLocalStorage());
};
setProductActive = (product, active) => {
  this.setState((state) => ({
    products: state.products.map(p => p.name === product.name ? { ...p, active } : p)
  }));
}

render() {
  return (
    <BrowserRouter>
    <div className="App">
      <ProductList products={this.state.products} 
      deleteProduct={this.deleteProduct}
      setProductActive={this.setProductActive} />
      <Route path="/create" render={(props) => <NewProd {...props} 
      products = {this.state.products}
      redirect = {this.state.redirect}
      handleFormSubmit={this.handleFormSubmit}
      handleInputChange={this.handleInputChange}
      newName={this.state.name}
      newEan={this.state.ean}
      newType={this.state.type}
      newWeight={this.state.weight}
      newColor={this.state.color} />} />
      <Route path="/view" render={(props) => <ViewProd {...props} products={this.state.products} />} />
      <Route path="/edit" render={(props) => <EditProd {...props} products={this.state.products} 
      handleInputChange={this.handleInputChange}
      handleEditFormSubmit={this.handleEditFormSubmit}
      editName={this.state.name}
      editEan={this.state.ean}
      editType={this.state.type}
      editWeight={this.state.weight}
      editColor={this.state.color}
      redirect={this.state.redirect} />} /> 
      <LowWidthList products={this.state.products}
      deleteProduct={this.deleteProduct} />
    </div>
    </BrowserRouter>
  );
  }
}

export default App;