import React from 'react';
import { Dropdown } from '../Dropdown';
import { DropdownList } from '../DropdownList/DropdownList';
import { DropdownListItem } from '../DropdownListItem/DropdownListItem';

export default (
  <Dropdown
  uxpId="Dropdown-1"
  submenuToggleLabel="SubMenuToggleLabel Text">
    <DropdownList uxpId="DropdownList-1">
      <DropdownListItem uxpId="DropdownListItem-1">Item1</DropdownListItem>
      <DropdownListItem uxpId="DropdownListItem-2">Item2</DropdownListItem>
    </DropdownList>
  </Dropdown>
);