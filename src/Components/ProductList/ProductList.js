import React from "react";
import "./ProductList.css";

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {name: "Cabbage", ean: "000000000000", type: "Vegetable", weight: "2kg", color: "Green", active: "true"},
                {name: "Banana", ean: "111111111111", type: "Fruit", weight: "0.3kg", color: "Yellow", active: "true"},
                {name: "Tomato", ean: "222222222222", type: "Vegetable", weight: "0.5kg", color: "Red", active: "true"},
                {name: "Chocolate", ean: "333333333333", type: "Candy", weight: "0.2kg", color: "Brown", active: "true"},
                {name: "Apple", ean: "444444444444", type: "Fruit", weight: "0.3kg", color: "Red", active: "true"},
                {name: "Cucumber", ean: "555555555555", type: "Vegetable", weight: "1kg", color: "Green", active: "true"},
            ]
        }
    }
    addProduct = (e) => {
        this.setState((prevState) => ({
            products: [...prevState.products, {name: "", ean:"", type:"", weight:"", color:""}],
        }))
    }
    renderTableHeader() {
        let header = Object.keys(this.state.products[0])
        return header.map((key, index) => {
            return <th key = {index}>{key.toUpperCase()}</th>
        })
    }
    renderTableData() {
        return this.state.products.map((product, index) => {
            const { name, ean, type, weight, color, active } = product;
            return (
                <tr>
                    <td>{name}</td>
                    <td>{ean}</td>
                    <td>{type}</td>
                    <td>{weight}</td>
                    <td>{color}</td>
                    <td>{active}</td>
                    <td>View</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
            )
        })
    }
    render() { 
        return (
            <div>
                <h1>Product List</h1>
                <table>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                </table>
                <form>
                <label htmlFor="name">Product name: </label>
                <input type="text" name="name" />
                <label htmlFor="ean">EAN code: </label>
                <input type="text" name="ean" />
                <label htmlFor="type">Product type: </label>
                <input type="text" name="type" />
                <label htmlFor="weight">Product weight: </label>
                <input type="text" name="weight" />
                <label htmlFor="color">Product color: </label>
                <input type="text" name="color" />
                <button>Add new product</button>
            </form>
            </div>
        )
    }
}
export default ProductList;