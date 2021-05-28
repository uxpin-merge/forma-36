import React from 'react';
import { Paragraph } from '@contentful/f36-typography/src/Paragraph';
import { HeadingInternalProps } from '@contentful/f36-typography/src/Heading';

function ParagraphM({ children }: HeadingInternalProps) {
  return <Paragraph children={children} />;
}

export default ParagraphM;
