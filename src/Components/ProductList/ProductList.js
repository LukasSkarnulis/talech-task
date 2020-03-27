import React from "react";
import "./ProductList.css";
import {Link} from "react-router-dom";

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
                        <th>Active</th>
                    </tr>
                    {products.map((product, index) => {
                        return (
                            <tr key={index}>
                                <td>{product.name}</td>
                                <td>{product.ean}</td>
                                <td>{product.type}</td>
                                <td>{product.weight}</td>
                                <td>{product.color}</td>
                                <td><input type="checkbox" checked={product.active} onChange={(e) => this.props.setProductActive(product, e.target.checked)} /></td>
                                <td><Link to={{ pathname: "/view", state: { prodIndex: index }}} ><button>View</button></Link></td>
                                <td><Link to={{ pathname: "/edit", state: { prodIndex: index }}} ><button>Edit</button></Link></td>
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