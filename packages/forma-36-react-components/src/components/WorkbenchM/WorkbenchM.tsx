import React from "react";
import { Workbench, WorkbenchProps } from '../Workbench/Workbench';
import WorkbenchHeaderM from '../WorkbenchHeaderM/WorkbenchHeaderM';
import WorkbenchSidebarM from '../WorkbenchSidebarM/WorkbenchSidebarM';
import WorkbenchContentM from '../WorkbenchContentM/WorkbenchContentM';

function WorkbenchM({ children, className, testId, ...otherprops }: WorkbenchProps){
    return (
      <Workbench
        children={children} 
        className={className} 
        testId={testId}
        {...otherprops} />

    )
}

export default WorkbenchM;