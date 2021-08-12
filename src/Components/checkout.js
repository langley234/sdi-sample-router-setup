import React from 'react';
import Cart from './cart';

class Checkout extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <Cart items={this.props.items} />
                <button>Give Us Your Money</button>
            </div>
        );
    }
}

export default Checkout;