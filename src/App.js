import React, { Component } from 'react';
import './App.css';
import FlexyTable from './FlexyTable';
import FlexyColumns from './FlexyTable/Columns';
import FlexyColumn from './FlexyTable/Columns/Column';
import FlexyRows from './FlexyTable/Rows';
import FlexyRow from './FlexyTable/Rows/Row';
import Cell from './FlexyTable/Cell';

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
        <FlexyTable>
          <FlexyColumns>
            <FlexyColumn name="a" title="" helpLink="" width="30px" stickyAlign="left" />
            <FlexyColumn name="b" title="" helpLink="" width="100px" />
            <FlexyColumn name="c" title="" helpLink="" width="100px" />
            <FlexyColumn name="d" title="" helpLink="" width="30px" stickyAlign="rigth" />
            <FlexyColumn name="e" title="" helpLink="" width="100px" />
            <FlexyColumn name="f" title="" helpLink="" width="100px" />
            <FlexyColumn name="g" title="" helpLink="" width="100px" />
            <FlexyColumn name="h" title="" helpLink="" width="100px" />
            <FlexyColumn name="i" title="" helpLink="" width="100px" />
            <FlexyColumn name="j" title="" helpLink="" width="100px" />
            <FlexyColumn name="k" title="" helpLink="" width="100px" />
            <FlexyColumn name="m" title="" helpLink="" width="100px" />
            <FlexyColumn name="n" title="" helpLink="" width="100px" />
          </FlexyColumns>
          <FlexyRows>
            <FlexyRow isSticky isHeader>
              <Cell column="a">Row A / Column A</Cell>
              <Cell column="b">Row A / Column B</Cell>
              <Cell column="c">Row A / Column C</Cell>
              <Cell column="d">Row A / Column D</Cell>
            </FlexyRow>
            <FlexyRow name="b">
              <Cell column="a">Row B / Column A</Cell>
              <Cell column="b">Row B / Column B</Cell>
              <Cell column="c">Row B / Column C</Cell>
              <Cell column="d">Row B / Column D</Cell>
            </FlexyRow>
            <FlexyRow name="c">
              <Cell column="a">Row C / Column A</Cell>
              <Cell column="b">Row C / Column B</Cell>
              <Cell column="c">Row C / Column C</Cell>
              <Cell column="d">Row C / Column D</Cell>
            </FlexyRow>
            <FlexyRow name="d">
              <Cell column="a">Row D / Column A</Cell>
              <Cell column="b">Row D / Column B</Cell>
              <Cell column="c">Row D / Column C</Cell>
              <Cell column="d">Row D / Column D</Cell>
            </FlexyRow>
          </FlexyRows>
        </FlexyTable>
      </div>
    );
  }
}

export default App;
