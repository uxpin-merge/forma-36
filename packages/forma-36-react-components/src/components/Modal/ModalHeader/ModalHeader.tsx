import React, { CSSProperties, ReactElement } from 'react';
import cn from 'classnames';
import { Close } from '@contentful/f36-icons';

import { IconButton } from '../../IconButton';
import styles from './ModalHeader.css';

export interface ModalHeaderProps {
  title: string;
  onClose?: Function;
  /**
   * @uxpinignoreprop
   */
  testId?: string;
  /**
   * @uxpinignoreprop
   */
  className?: string;
  isNotWrapped?: boolean;
  /**
   * @uxpinignoreprop
   */
  style?: CSSProperties;
}

export function ModalHeader({
  onClose,
  title,
  testId = 'cf-ui-modal-header',
  isNotWrapped,
  className,
  ...otherProps
}: ModalHeaderProps): ReactElement {
  const titleClassNames = cn(styles.ModalHeader__title, {
    [styles['ModalHeader__title--is-not-wrapped']]: isNotWrapped,
  });

  return (
    <div
      {...otherProps}
      className={cn(styles.ModalHeader, className)}
      data-test-id={testId}
    >
      <h1 className={titleClassNames}>{title}</h1>
      {onClose && (
        <IconButton
          iconProps={{ as: Close, size: 'small' }}
          buttonType="muted"
          label="Close"
          onClick={() => onClose()}
        />
      )}
    </div>
  );
}
