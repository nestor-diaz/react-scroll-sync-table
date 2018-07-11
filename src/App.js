import React, { Component } from 'react';
import './App.css';
import FlexyTable from './FlexyTable';

class App extends Component {
  state = {
    isFullMetricsContainer: false
  };

  toggleFullWidthContainer = () =>
    this.setState({ isFullMetricsContainer: !this.state.isFullMetricsContainer });

  render() {
    const isFullMetricsContainer = this.state.isFullMetricsContainer;
    const containerClass = isFullMetricsContainer ? 'full-metrics-container' : 'metrics-container';

    return (
      <div className={containerClass}>
        <button onClick={this.toggleFullWidthContainer}>Full Metrics Container</button>
        <FlexyTable />
      </div>
    );
  }
}

export default App;
