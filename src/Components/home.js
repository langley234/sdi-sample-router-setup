import React from 'react';
import NavBar from './navbar';

class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <NavBar />
                Home Placeholder Text
            </div>
        );
    }
}

export default Home;