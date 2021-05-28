import React from 'react';
import { Tabs } from '../Tabs';
import { Tab } from '../Tab/Tab';

export default (
  <Tabs
    uxpId="tabs-1"
    dividerOrientation="horizontal"
    role="tablist"
    withDivider={false}
    testId="cf-ui-tabs"
  >
    <Tab uxpId="tab-1" id="first" href="https://contentful.com" selected>
      First
    </Tab>
    <Tab uxpId="tab-2" id="second" href="https://contentful.com">
      Second
    </Tab>
    <Tab uxpId="tab-3" id="third" href="https://contentful.com">
      Third
    </Tab>
  </Tabs>
);
