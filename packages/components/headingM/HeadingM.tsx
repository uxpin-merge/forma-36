import React from 'react';
import {
  Heading,
  HeadingInternalProps,
} from '@contentful/f36-typography/src/Heading';

function HeadingM({ children }: HeadingInternalProps) {
  return <Heading children={children} />;
}

export default HeadingM;
