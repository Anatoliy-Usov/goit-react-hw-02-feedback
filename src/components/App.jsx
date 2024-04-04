import { Component } from 'react';

// import { Container } from './Fitback/fitback.style';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          <button>Goog</button>
          <button>Nautral</button>
          <button>Bad</button>
        </div>

        <h1>Statistics</h1>
        <p>Goog: {this.state.good}</p>
        <p>Nautral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
      </div>
    );
  }
}
