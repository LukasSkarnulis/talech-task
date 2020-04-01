import React from "react";
import "./ViewProd.css";
import {Link} from "react-router-dom";
import Tabs from "../Tabs/Tabs";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

class ViewProd extends React.Component {
    render() { 
        const products = this.props.products;
        const index = this.props.location.state.prodIndex;
        const quantityOptions = {
            title: {
                text: "Quantity Chart"
            },
            series: [{
                data: [3, 2, 0, 5, 0]
            }]
        }
        const priceOptions = {
            title: {
                text: "Price Chart"
            },
            series: [{
                data: [5, 10, 3, 20, 4]
            }]
        }
        return (
            <Tabs>
            <div label="Product">
                <ul className="viewProd">
                    <li><span className="bold">Name:</span> {products[index].name}</li>
                    <li><span className="bold">EAN Code:</span> {products[index].ean}</li>
                    <li><span className="bold">Type:</span> {products[index].type}</li>
                    <li><span className="bold">Weight:</span> {products[index].weight}</li>
                    <li><span className="bold">Color:</span> {products[index].color}</li>
                    <li><span className="bold">Quantity:</span> {products[index].quantity}</li>
                    <li><span className="bold">Price:</span> {products[index].price}</li>
                    <li className="capitalize"><span className="bold">Active:</span> {String(products[index].active)}</li>
                    <div className="viewbuttons">
                    <td><Link to={{ pathname: "/"}} ><button className="viewclose-button">Close</button></Link></td>
                    </div>
                </ul>
            </div>
            <div label="Quantity" className="viewQuantity">
                <h1>Quantity History</h1>
                <HighchartsReact highcharts={Highcharts} options={quantityOptions} />
            </div>
            <div label="Price" className="viewPrice">
                <h1>Price History</h1>
                <HighchartsReact highcharts={Highcharts} options={priceOptions} />
            </div>
            </Tabs>
        )
    }
}
export default ViewProd;
