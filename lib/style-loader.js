import jss from 'jss';
import preset from 'jss-preset-default';

export default (styles) => {
  jss.setup(preset());

  const styleSheet = jss.createStyleSheet(styles, { named: false });
  styleSheet.attach();
};
