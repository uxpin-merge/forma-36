import React from 'react';
import * as icons from '@contentful/f36-icons';
import type { IconSize, IconVariant } from '@contentful/f36-icon/src';
type IconType = keyof typeof icons;

type IconProps = {
  size?: IconSize;
  icon: IconType;
  variant?: IconVariant;
};

function IconM({ icon, size, variant, ...otherProps }: IconProps) {
  const Element = icons[icon];
  return <Element size={size} variant={variant} {...otherProps} />;
}

export default IconM;
