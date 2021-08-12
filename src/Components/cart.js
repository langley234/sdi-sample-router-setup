import React from 'react';

class Cart extends React.Component {
    constructor(props){
        super(props);

        console.log(props.items);
    }

    render() {
        return (
            <ul><h1>List</h1>
                {
                    this.props.items.map((item) => {
                        return <li>{item}</li>
                    })
                }
            </ul>
        );
    }
}

export default Cart;