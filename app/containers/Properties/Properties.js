import React from 'react';

import layoutStyles from 'common/styles/layout.scss';

import PropertyTable from './views/PropertyTable';

import data from '../../data.json';
import styles from './styles.scss';

const PropertyList = () => (
  <div className={styles.propertiesPage}>
    <div className={styles.introduce}>
      <h1>Property details list</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div className={layoutStyles.container}>
      <PropertyTable
        properties={data}
      />
    </div>
  </div>
);

export default PropertyList;
