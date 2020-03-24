import React from "react";
import "./ProductList.css";

class ProductList extends React.Component {
    render() { 
        const products = this.props.products;
        return (
            <div>
                <h1>Product List</h1>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>EAN Code</th>
                        <th>Type</th>
                        <th>Weight</th>
                        <th>Color</th>
                    </tr>
                    {products.map((product, index) => {
                        return (
                            <tr key={index}>
                                <td>{product.name}</td>
                                <td>{product.ean}</td>
                                <td>{product.type}</td>
                                <td>{product.weight}</td>
                                <td>{product.color}</td>
                                <td><button>View</button></td>
                                <td><button>Edit</button></td>
                                <td><button onClick={() => this.props.deleteProduct(index)}>Delete</button></td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        )
    }
}
export default ProductList;