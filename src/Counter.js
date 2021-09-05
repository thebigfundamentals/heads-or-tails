import React, { Component } from 'react';

class Counter extends Component {
    static defaultProps = {
        total: 0,
        heads: 0,
        tails: 0
    };
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <div>
                <p>The coin flipped {this.props.total} times, {this.props.heads} heads and {this.props.tails} tails.</p>
            </div>
         );
    }
}
 
export default Counter;