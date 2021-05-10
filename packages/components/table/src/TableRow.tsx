import { css, cx } from 'emotion';
import React, { forwardRef } from 'react';
import type { HTMLProps } from 'react';
import tokens from '@contentful/f36-tokens';
import { Primitive } from '@contentful/f36-core';
import type { CommonProps } from '@contentful/f36-core';

const styles = {
  root: css({
    '&:last-child td': {
      borderBottom: 'none',
    },
    '&:hover td': {
      backgroundColor: tokens.colorElementLightest,
    },
  }),
  selected: css({
    'td, th': {
      backgroundColor: tokens.colorBlueLightest,
    },
    'td:last-child': {
      boxShadow: `inset -2px 0 0 ${tokens.colorBlueMid}`,
    },
  }),
};

export type TableRowInternalProps = HTMLProps<HTMLTableRowElement> &
  CommonProps & {
    selected?: boolean;
    children: React.ReactNode;
  };

export type TableRowProps = TableRowInternalProps;

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  function TableRow(
    {
      className,
      children,
      selected = false,
      testId = 'cf-ui-table-row',
      ...otherProps
    },
    forwardedRef,
  ) {
    return (
      <Primitive
        {...otherProps}
        as="tr"
        className={cx(
          styles.root,
          {
            [styles.selected]: selected,
          },
          className,
        )}
        ref={forwardedRef}
        testId={testId}
      >
        {children}
      </Primitive>
    );
  },
);