import React from "react";
import "./ViewProd.css";
import {Link} from "react-router-dom";

class ViewProd extends React.Component {
    render() { 
        const products = this.props.products;
        const index = this.props.location.state.prodIndex;
        return (
            <div className="viewProd">
                <ul>
                    <li><span className="bold">Name:</span> {products[index].name}</li>
                    <li><span className="bold">EAN Code:</span> {products[index].ean}</li>
                    <li><span className="bold">Type:</span> {products[index].type}</li>
                    <li><span className="bold">Weight:</span> {products[index].weight}</li>
                    <li><span className="bold">Color:</span> {products[index].color}</li>
                    <li className="capitalize"><span className="bold">Active:</span> {String(products[index].active)}</li>
                    <div className="viewbutt">
                    <td><Link to={{ pathname: "/"}} ><button className="viewclose-button">Close</button></Link></td>
                    </div>
                </ul>
            </div>
        )
    }
}
export default ViewProd;