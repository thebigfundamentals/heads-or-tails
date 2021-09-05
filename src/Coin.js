import React, { Component } from 'react';
import Counter from './Counter';
import './Coin.css';

class Coin extends Component {
    static defaultProps = {
        tails: "https://rlv.zcache.com/quarter_paper_plates_tails_paper_plate-rccc4191227ec450fa862c6dd1db899a6_z6cf8_704.webp?rlvnet=1",
        heads: "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg"
    }
    constructor(props) {
        super(props);
        this.state = {
            imgSrc: this.props.heads,
            total: 0,
            headsTotal: 0,
            tailsTotal: 0,
            isFlipping: false
        }
    }
    handleClick = () => {
        const options = [this.props.tails, this.props.heads];
        const index = Math.floor(Math.random() * 2);
        this.setState((curState) => ({ imgSrc: options[index], isFlipping: true, total: ++curState.total }));
        index === 0 ? this.setState((curState) => ({ tailsTotal: ++curState.tailsTotal }))
            : this.setState((curState) => ({ headsTotal: ++curState.headsTotal }));
        setTimeout(() => {
            this.setState({ isFlipping: false });
        }, 2000)
    }
    render() {
        return (
            <div className="Coin">
                <img className={`${this.state.isFlipping ? 'Coin-flipping' : null}`} src={this.state.imgSrc} />
                <button
                    disabled={this.state.isFlipping}
                    onClick={this.handleClick}>
                    {`${this.state.isFlipping ? 'Flipping...' :
                        'Flip the coin!'}`}</button>
                <Counter total={this.state.total} heads={this.state.headsTotal} tails={this.state.tailsTotal} />
            </div>
        );
    }
}

export default Coin;