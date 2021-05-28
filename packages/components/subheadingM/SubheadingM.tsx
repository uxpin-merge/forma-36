import React from 'react';
import { Subheading } from '@contentful/f36-typography/src/Subheading';
import { HeadingInternalProps } from '@contentful/f36-typography/src/Heading';

function SubheadingM({ children }: HeadingInternalProps) {
  return <Subheading children={children} />;
}

export default SubheadingM;
