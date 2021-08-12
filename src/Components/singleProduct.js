import React from 'react';
import { Route,
    useParams } from 'react-router-dom';

class SingleProduct extends React.Component {
    constructor(props) {
        super(props);

        this.resolveItemName();
        this.itemName = this.resolveItemName();

        this.resolveItemName = this.resolveItemName.bind(this);
    }

    resolveItemName() {
        let url = String(window.location.pathname);
        let index = url.lastIndexOf(`/`);
        let itemName = url.slice(index+1);

        return itemName;
    }

    render() {
        return (
            <div>
                <h1>{`${this.itemName}`}</h1>
                {<button onClick={ () => {this.props.addToCartCallback(this.itemName)} }>Add To Cart</button> }
            </div>
        );
    }
}

export default SingleProduct;