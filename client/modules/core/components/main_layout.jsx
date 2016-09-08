import React from 'react';
import Helmet from 'react-helmet';

import styles from '../../../styles/index.js';
import loader from '../../../../lib/style-loader.js';
loader(styles);

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
