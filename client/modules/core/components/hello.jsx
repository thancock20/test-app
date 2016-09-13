import React from 'react';
import Load from 'shingon-load-jss';

const Hello = () => {
  const { classes } = Load(styles);

  return (
    <div>
      <span>Hello</span>
    </div>
  );
};

const styles = { };

export default Hello;
