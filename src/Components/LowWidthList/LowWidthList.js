import React from "react";
import "./LowWidthList.css";
import {Link} from "react-router-dom";

class LowWidthList extends React.Component {
    render() { 
        const products = this.props.products;
        return (
            <div className="lowWidthList">
            {products.map((product, index) => {
                return (
                    <ul className="low-list" key={index}>
                    <li><span className="bold">Name:</span> {product.name}</li>
                    <li><span className="bold">EAN Code:</span> {product.ean}</li>
                    <li><span className="bold">Type:</span> {product.type}</li>
                    <li><span className="bold">Weight:</span> {product.weight}</li>
                    <li><span className="bold">Color:</span> {product.color}</li>
                    <li className="capitalize"><span className="bold">Active:</span> {String(product.active)}</li>
                    <div className="low-buttons">
                    <li><Link to={{ pathname: "/create"}} ><button className="create-button" onClick={() => window.scrollTo(0, 0)}>Create</button></Link></li>
                    <li className="text-center"><Link to={{ pathname: "/edit", state: { prodIndex: index }}} ><button className="edit-button">Edit</button></Link></li>
                    <li className="text-center"><Link to={{ pathname: "/"}} ><button className="delete-button" onClick={() => this.props.deleteProduct(index)}>Delete</button></Link></li> 
                    </div>      
                </ul>
                )
            })}
            </div>
        )
    }
}
export default LowWidthList;
