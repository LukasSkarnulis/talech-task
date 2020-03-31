import React from "react";
import {Link, Redirect} from "react-router-dom";
import "../NewProd/NewProd.css"

class NewProd extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        localStorage.setItem("products", JSON.stringify(this.props.products));
      }
    render() {
        const redirect = this.props.redirect;
        if (redirect) return <Redirect to="/" />
        return (
            <div className="createProd">
            <form className="createForm" onSubmit={this.props.handleFormSubmit}>
            <input id="name" type="text" name="name" placeholder="Product Name:" value={this.props.newName} onChange={this.props.handleInputChange} />
            <input id="ean" type="text" name="ean" placeholder="EAN Code:" value={this.props.newEan} onChange={this.props.handleInputChange} />
            <input id="type" type="text" name="type" placeholder="Product Type:" value={this.props.newType} onChange={this.props.handleInputChange} />
            <input id="weight" type="text" name="weight" placeholder="Product Weight:" value={this.props.newWeight} onChange={this.props.handleInputChange} />
            <input id="color" type="text" name="color" placeholder="Product Color:" value={this.props.newColor} onChange={this.props.handleInputChange} />
            <div className="createButtons">
            <button type="submit" value="Submit" className="new-button">Add</button>
            <Link to={{ pathname: "/"}} ><button className="close-button">Close</button></Link>
            </div>
        </form>
        </div>
        )
    }
}
export default NewProd;
