import objectMerge from 'object-merge';
import normalize from './normalize';
import styles from './styles.js';

export default objectMerge(
  normalize,
  styles
);
