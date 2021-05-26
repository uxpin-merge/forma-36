import React from "react";
import { Workbench, WorkbenchSidebarProps } from '../Workbench/Workbench';

function WorkbenchSidebarM({ children, className, position, testId }: WorkbenchSidebarProps){
    return (
      <Workbench.Sidebar
        children={children} 
        className={className} 
        position={position}
        testId={testId}
      />
    )
}

export default WorkbenchSidebarM;