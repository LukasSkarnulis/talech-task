import React from "react";

class NewProd extends React.Component {
    render() {
        return (
            <div>
            <form onSubmit={this.props.handleFormSubmit}>
            <label htmlFor="name">Product Name: </label>
            <input id="name" type="text" name="name" value={this.props.newName} onChange={this.props.handleInputChange} />
            <label htmlFor="ean">EAN Code: </label>
            <input id="ean" type="text" name="ean" value={this.props.newEan} onChange={this.props.handleInputChange} />
            <label htmlFor="type">Product Type: </label>
            <input id="type" type="text" name="type" value={this.props.newType} onChange={this.props.handleInputChange} />
            <label htmlFor="weight">Product Weight: </label>
            <input id="weight" type="text" name="weight" value={this.props.newWeight} onChange={this.props.handleInputChange} />
            <label htmlFor="color">Product Color: </label>
            <input id="color" type="text" name="color" value={this.props.newColor} onChange={this.props.handleInputChange} />
            <button type="submit" value="Submit">Add New Product</button>
        </form>
        </div>
        )
    }
}
export default NewProd;