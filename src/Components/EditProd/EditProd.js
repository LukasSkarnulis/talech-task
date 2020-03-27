import React from "react";
import "./EditProd.css";
import {Link, Redirect, withRouter} from "react-router-dom";

class EditProd extends React.Component {
    render() { 
        const products = this.props.products;
        const index = this.props.location.state.prodIndex;
        return (
            <div>
                <h1>Edit Product</h1>
            
                <form onSubmit={(e) => this.props.handleEditFormSubmit(index, e)} >
            <label htmlFor="name">Product Name: </label>
            <input id="editname" type="text" name="name" placeholder={products[index].name} value={this.props.editName} onChange={this.props.handleInputChange} />
            <label htmlFor="ean">EAN Code: </label>
            <input id="editean" type="text" name="ean" placeholder={products[index].ean} value={this.props.editEan} onChange={this.props.handleInputChange} />
            <label htmlFor="type">Product Type: </label>
            <input id="edittype" type="text" name="type" placeholder={products[index].type} value={this.props.editType} onChange={this.props.handleInputChange} />
            <label htmlFor="weight">Product Weight: </label>
            <input id="editweight" type="text" name="weight" placeholder={products[index].weight} value={this.props.editWeight} onChange={this.props.handleInputChange} />
            <label htmlFor="color">Product Color: </label>
            <input id="editcolor" type="text" name="color" placeholder={products[index].color} value={this.props.editColor} onChange={this.props.handleInputChange} />
            <button type="submit" value="Submit">Save</button>
            <Link to={{ pathname: "/"}} ><button>Close</button></Link>
        </form>
            </div>
        )
    }
};
export default EditProd;