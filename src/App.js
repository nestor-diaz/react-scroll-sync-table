import React, { Component } from 'react';
import './App.css';
import ScrollSyncTable from './ScrollSyncTable';
import ScrollSyncColumns from './ScrollSyncTable/ScrollSyncColumns';
import ScrollSyncColumn from './ScrollSyncTable/ScrollSyncColumns/ScrollSyncColumn';
import ScrollSyncRows from './ScrollSyncTable/ScrollSyncRows';
import ScrollSyncRow from './ScrollSyncTable/ScrollSyncRows/ScrollSyncRow';
import ScrollSyncCell from './ScrollSyncTable/ScrollSyncCell';

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
        <ScrollSyncTable stickHeader>
          <ScrollSyncColumns>
            <ScrollSyncColumn name="a" width="30px" stickyAlign="left">Column A</ScrollSyncColumn>
            <ScrollSyncColumn name="b" width="100px">Column B</ScrollSyncColumn>
            <ScrollSyncColumn name="c" width="100px">Column C</ScrollSyncColumn>
            <ScrollSyncColumn name="d" width="100px">Column D</ScrollSyncColumn>
            <ScrollSyncColumn name="e" width="100px">Column E</ScrollSyncColumn>
            <ScrollSyncColumn name="f" width="30px" stickyAlign="rigth">Column F</ScrollSyncColumn>
          </ScrollSyncColumns>
          <ScrollSyncRows>
            <ScrollSyncRow>
              <ScrollSyncCell column="a">Row A / Column A</ScrollSyncCell>
              <ScrollSyncCell column="b">Row A / Column B</ScrollSyncCell>
              <ScrollSyncCell column="d">Row A / Column D</ScrollSyncCell>
              <ScrollSyncCell column="f">Row A / Column F</ScrollSyncCell>
            </ScrollSyncRow>
            <ScrollSyncRow>
              <ScrollSyncCell column="a">Row B / Column A</ScrollSyncCell>
              <ScrollSyncCell column="b">Row B / Column B</ScrollSyncCell>
              <ScrollSyncCell column="c">Row B / Column C</ScrollSyncCell>
              <ScrollSyncCell column="d">Row B / Column D</ScrollSyncCell>
            </ScrollSyncRow>
            <ScrollSyncRow>
              <ScrollSyncCell column="a">Row C / Column A</ScrollSyncCell>
              <ScrollSyncCell column="b">Row C / Column B</ScrollSyncCell>
              <ScrollSyncCell column="c">Row C / Column C</ScrollSyncCell>
              <ScrollSyncCell column="d">Row C / Column D</ScrollSyncCell>
            </ScrollSyncRow>
            <ScrollSyncRow>
              <ScrollSyncCell column="a">Row D / Column A</ScrollSyncCell>
              <ScrollSyncCell column="b">Row D / Column B</ScrollSyncCell>
              <ScrollSyncCell column="c">Row D / Column C</ScrollSyncCell>
              <ScrollSyncCell column="d">Row D / Column D</ScrollSyncCell>
            </ScrollSyncRow>
          </ScrollSyncRows>
        </ScrollSyncTable>
      </div>
    );
  }
}

export default App;
