import React from 'react';
import { Grid } from '../Grid';
import { GridItem } from '../GridItem/GridItem';

export default (
  <Grid
    uxpId="grid-1"
    columns="1fr 2fr"
    rows="auto"
    rowGap="spacingM"
    columnGap="spacingM"
  >
    <GridItem uxpId="grid-item-1" style={{ backgroundColor: '#263545', height: '100px', width: '100px' }} />
    <GridItem uxpId="grid-item-2" style={{ backgroundColor: '#263545', height: '100px', width: '100px' }} />
    <GridItem uxpId="grid-item-3" style={{ backgroundColor: '#263545', height: '100px', width: '100px' }} />
    <GridItem uxpId="grid-item-4" style={{ backgroundColor: '#263545', height: '100px', width: '100px' }} />
  </Grid>
);
