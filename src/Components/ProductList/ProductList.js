import React from "react";
import "./ProductList.css";
import {Link} from "react-router-dom";

class ProductList extends React.Component {
    render() { 
        const products = this.props.products;
        const bold = {
            fontWeight: "bold",
            fontSize: "1.8rem"
        };
        const none = {};
        return (
            <div className="productList">
                <table className="productTable">
                    <tr>
                        <th className="text-left">Name</th>
                        <th className="text-right">EAN Code</th>
                        <th className="text-right">Type</th>
                        <th className="text-right">Weight</th>
                        <th className="text-right">Color</th>
                        <th className="text-right">Quantity</th>
                        <th className="text-right">Price</th>
                        <th className="text-center">Active</th>
                    </tr>
                    {products.map((product, index) => {
                        return (
                            <tr style={product.quantity === "0" ? bold : none} key={index}>
                                <td className="text-left">{product.name}</td>
                                <td className="text-right">{product.ean}</td>
                                <td className="text-right">{product.type}</td>
                                <td className="text-right">{product.weight}</td>
                                <td className="text-right">{product.color}</td>
                                <td className="text-right">{product.quantity}</td>
                                <td className="text-right">{product.price}</td>
                                <td className="text-center">
                                <input type="checkbox" id={index} className="checkmark" checked={product.active} onChange={(e) => this.props.setProductActive(product, e.target.checked)} />
                                <label for={index} /></td>
                                <td className="text-center"><Link to={{ pathname: "/view", state: { prodIndex: index }}} ><button className="view-button">View</button></Link></td>
                                <td className="text-center"><Link to={{ pathname: "/edit", state: { prodIndex: index }}} ><button className="edit-button">Edit</button></Link></td>
                                <td className="text-center"><Link to={{ pathname: "/"}} ><button className="delete-button" onClick={() => this.props.deleteProduct(index)}>Delete</button></Link></td>
                            </tr>
                        )
                    })}
                </table>
                <div className="create-box">
                 <Link to={{ pathname: "/create"}} ><button className="create-button">Create</button></Link>
                 </div>
            </div>
        )
    }
}
export default ProductList;
