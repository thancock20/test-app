import React from 'react';
import Helmet from 'react-helmet';

import styles from '../../../styles/index.js';
import Load from 'shingon-load-jss';
Load(styles, 'global');

const Layout = ({content = () => null }) => (
  <div>
    <div>
      <Helmet
        defaultTitle="Test App"
        titleTemplate="Test App - %s"
      />
      {content()}
    </div>
  </div>
);

export default Layout;
