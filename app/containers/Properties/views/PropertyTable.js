import React from 'react';
import PropTypes from 'prop-types';
import { upperFirst } from 'lodash';

import styles from './propertyTable.styles.scss';

class PropertyTable extends React.PureComponent {
  addressRenderer = (address) => (
    Object.keys(address).map((key, index) => (
      <p key={index}>{address[key]}</p> // eslint-disable-line
    ))
  )

  rowRenderer = (property, index) => (
    <tr key={index}>
      <td>{upperFirst(property.owner)}</td>
      <td>{this.addressRenderer(property.address)}</td>
      <td>£{property.incomeGenerated}</td>
    </tr>
  )

  render() {
    const { properties } = this.props;

    return (
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Owner</th>
              <th>Address</th>
              <th>IncomeGenerated</th>
            </tr>
          </thead>
          <tbody>
            {properties.map(this.rowRenderer)}
          </tbody>
        </table>
      </div>
    );
  }
}

PropertyTable.propTypes = {
  properties: PropTypes.array.isRequired,
};

export default PropertyTable;
