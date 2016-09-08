import { configure, setAddon, addDecorator } from '@kadira/storybook';
import { disable } from 'react-komposer';

import styles from '../client/styles/index.js';
import loader from '../lib/style-loader';
loader(styles);

disable();

function loadStories() {
  // require as many as stories you need.
  require('../client/modules/core/components/.stories/index.js');
}

configure(loadStories, module);
