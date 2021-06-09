import React from 'react';
import { EntityList } from '../EntityList';
import { EntityListItem } from '../EntityListItem/EntityListItem';

export default (
  <EntityList uxpId="Entity-list-1">
    <EntityListItem
      uxpId="Entity-list-item-1"
      title="Entry 1"
      description="Description"
      contentType="My content type"
      status="published"
    />
  </EntityList>
);
