import React from 'react';
import useSheet from 'react-jss';

const Hello = ({ sheet }) => {
  const { } = sheet.classes;
  return (
    <div>
      <span>Hello</span>
    </div>
  );
};

const styles = { };

export default useSheet(Hello, styles);
