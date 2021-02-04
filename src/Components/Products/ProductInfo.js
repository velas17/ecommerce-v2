import React from 'react';

class Products extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="Product">
                    <img className="Product-card-image" alt="sneaker"
                        src={this.props.item.image} />
                    <h3 className="Product-name">{this.props.item.title}</h3>
                    <p className="price">{this.props.item.price}</p>
                    <p>{this.props.item.description}</p>
                    <p><button>Add to Cart</button></p>
                </div>
            </React.Fragment >
        )
    }
}

export default Products;