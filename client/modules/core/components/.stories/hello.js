import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Hello from '../hello.jsx';

storiesOf('core.Hello', module)
  .add('default view', () => {
    return (
      <Hello />
    );
  });
