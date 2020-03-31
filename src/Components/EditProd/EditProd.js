import React from "react";
import "./EditProd.css";
import {Link, Redirect} from "react-router-dom";

class EditProd extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        localStorage.getItem("products");
    }
    componentWillUnmount() {
        localStorage.setItem("products", JSON.stringify(this.props.products));
      }
    render() { 
        const products = this.props.products;
        const index = this.props.location.state.prodIndex;
        let redirect = this.props.redirect;
        if (redirect) return <Redirect to="/" />;
        return (
            <div>
            <form className="editForm" onSubmit={(e) => this.props.handleEditFormSubmit(index, e)} >
            <input id="editname" type="text" name="name" placeholder={`Name: ${products[index].name}`} value={this.props.editName} onChange={this.props.handleInputChange} />
            <input id="editean" type="text" name="ean" placeholder={`EAN Code: ${products[index].ean}`} value={this.props.editEan} onChange={this.props.handleInputChange} />
            <input id="edittype" type="text" name="type" placeholder={`Type: ${products[index].type}`} value={this.props.editType} onChange={this.props.handleInputChange} />
            <input id="editweight" type="text" name="weight" placeholder={`Weight: ${products[index].weight}`} value={this.props.editWeight} onChange={this.props.handleInputChange} />
            <input id="editcolor" type="text" name="color" placeholder={`Color: ${products[index].color}`} value={this.props.editColor} onChange={this.props.handleInputChange} />
            <div className="editButtons">
            <button className="edit-save-button" type="submit" value="Submit">Save</button>
            <Link to={{ pathname: "/"}} ><button className="close-edit-button">Close</button></Link>
            </div>
        </form>
            </div>
        )
    }
};
export default EditProd;