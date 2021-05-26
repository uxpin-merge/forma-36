import React from 'react';
import WorkbenchM from '../WorkbenchM';
import WorkbenchHeaderM from '../../WorkbenchHeaderM/WorkbenchHeaderM';
import WorkbenchContentM from '../../WorkbenchContentM/WorkbenchContentM';
import WorkbenchSidebarM from '../../WorkbenchSidebarM/WorkbenchSidebarM';

export default (
  <WorkbenchM
    className="test"
    testId="tstid" 
  >
    <WorkbenchHeaderM
      title="Title"
      description="description"
      onBack={{}}
    />
    <WorkbenchSidebarM
      className=""
      position="right"
      testId=""
    >
      Sidebar Children
    </WorkbenchSidebarM>
    <WorkbenchContentM
      type="default"
      className=""
      testId=""
    >
      ContentChildren
    </WorkbenchContentM>
  </WorkbenchM>
);