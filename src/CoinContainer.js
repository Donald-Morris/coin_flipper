import React, { Component } from 'react';
import { choice } from './helpers';
import Coin from './Coin';

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg' },
      { side: 'tails', imgSrc: 'https://tinyurl.com/22538mzc' },
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      flips: 0,
      heads: 0,
      tails: 0,
      currCoin: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState(st => {
      return {
        currCoin: newCoin,
        flips: st.flips + 1,
        heads: st.heads + (newCoin.side === 'heads' ? 1 : 0),
        tails: st.tails + (newCoin.side === 'tails' ? 1 : 0),
      };
    });
  }

  handleClick() {
    this.flipCoin();
  }
  render() {
    return (
      <div className='CoinContainer'>
        <h1>Let's Flip a Coin!</h1>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <button onClick={this.handleClick}>Flip Me!</button>
        <p>
          Out of {this.state.flips} flips, there have been {this.state.heads}{' '}
          heads and {this.state.tails} tails
        </p>
      </div>
    );
  }
}

export default CoinContainer;
