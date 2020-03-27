import React from "react";
import "./ViewProd.css";
import {Link} from "react-router-dom";

class ViewProd extends React.Component {
    render() { 
        const products = this.props.products;
        const index = this.props.location.state.prodIndex;
        return (
            <div>
                <h1>View Product</h1>
                <ul>
                    <li>{`Name: ${products[index].name}`}</li>
                    <li>{`EAN Code: ${products[index].ean}`}</li>
                    <li>{`Type: ${products[index].type}`}</li>
                    <li>{`Weight: ${products[index].weight}`}</li>
                    <li>{`Color: ${products[index].color}`}</li>
                    <li>{`Active: ${products[index].active}`}</li>
                    <td><Link to={{ pathname: "/"}} ><button>Close</button></Link></td>
                </ul>
            </div>
        )
    }
}
export default ViewProd;