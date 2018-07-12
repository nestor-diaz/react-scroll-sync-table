import React, { PureComponent } from 'react';
import FlexyTableBody from './FlexyTableBody';
import './FlexyTable.css';

// Static columns
const columns = [{
  name: 'toggle',
  title: '',
  link: '',
  width: '50px',
  stickyAlign: 'left'
}, {
  name: 'product-info',
  title: 'Product Info',
  link: '',
  width: '100px',
  stickyAlign: 'left'
}, {
  name: 'source-control',
  title: 'Source Control',
  link: '',
  width: '150px',
}, {
  name: 'test-coverage',
  title: 'Test Coverage',
  link: '',
  width: '120px',
}, {
  name: 'test-coverage-1',
  title: 'Test Coverage',
  link: '',
  width: '120px',
}, {
  name: 'test-coverage-2',
  title: 'Test Coverage',
  link: '',
  width: '120px'
}, {
  name: 'test-coverage-3',
  title: 'Test Coverage',
  link: '',
  width: '120px'
}, {
  name: 'test-coverage-4',
  title: 'Test Coverage',
  link: '',
  width: '120px'
}, {
  name: 'test-coverage-5',
  title: 'Test Coverage',
  link: '',
  width: '120px'
}, {
  name: 'test-coverage-6',
  title: 'Test Coverage',
  link: '',
  width: '120px'
}, {
  name: 'test-coverage-6',
  title: 'Test Coverage',
  link: '',
  width: '120px'
}, {
  name: 'test-coverage-8',
  title: 'Test Coverage',
  link: '',
  width: '120px'
}, {
  name: 'test-coverage-9',
  title: 'Test Coverage',
  link: '',
  width: '120px'
}, {
  name: 'test-coverage-6',
  title: 'Test Coverage',
  link: '',
  width: '120px',
  stickyAlign: 'rigth'
}];

// Dynamic rows
const rows = [{
  name: 'header',
  isSticky: true
}, {
  name: 'exchange',
  isSticky: false
}, {
  name: 'amf',
  isSticky: false
}, {
  name: 'exchange-1',
  isSticky: false
}, {
  name: 'amf-1',
  isSticky: false
}, {
  name: 'exchange-2',
  isSticky: false
}, {
  name: 'amf-2',
  isSticky: false
}];

class FlexyTable extends PureComponent {
  render() {
    return (
      <div className="flexyTable">
        <FlexyTableBody columns={columns} rows={rows} />
      </div>
    );
  }
}

export default FlexyTable;
