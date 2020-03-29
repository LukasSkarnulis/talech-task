import React from "react";
import "./ProductList.css";
import {Link} from "react-router-dom";

class ProductList extends React.Component {
    render() { 
        const products = this.props.products;
        return (
            <div className="productList">
                <table className="productTable">
                    <tr>
                        <th className="text-left">Name</th>
                        <th className="text-right">EAN Code</th>
                        <th className="text-right">Type</th>
                        <th className="text-right">Weight</th>
                        <th className="text-right">Color</th>
                        <th className="text-center">Active</th>
                    </tr>
                    {products.map((product, index) => {
                        return (
                            <tr key={index}>
                                <td className="text-left">{product.name}</td>
                                <td className="text-right">{product.ean}</td>
                                <td className="text-right">{product.type}</td>
                                <td className="text-right">{product.weight}</td>
                                <td className="text-right">{product.color}</td>
                                <td className="text-center">
                                <input type="checkbox" id="check" className="checkmark" checked={product.active} onChange={(e) => this.props.setProductActive(product, e.target.checked)} />
                                <label for="check" /></td>
                                <td className="text-center"><Link to={{ pathname: "/view", state: { prodIndex: index }}} ><button>View</button></Link></td>
                                <td className="text-center"><Link to={{ pathname: "/edit", state: { prodIndex: index }}} ><button>Edit</button></Link></td>
                                <td className="text-center"><button onClick={() => this.props.deleteProduct(index)}>Delete</button></td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        )
    }
}
export default ProductList;