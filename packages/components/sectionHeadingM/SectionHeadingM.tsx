import React from 'react';
import { SectionHeading } from '@contentful/f36-typography/src/SectionHeading';
import { HeadingInternalProps } from '@contentful/f36-typography/src/Heading';

function SectionHeadingM({ children }: HeadingInternalProps) {
  return <SectionHeading children={children} />;
}

export default SectionHeadingM;
