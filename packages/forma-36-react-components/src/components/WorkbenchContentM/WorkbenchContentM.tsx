import React from "react";
import { Workbench, WorkbenchContentProps } from '../Workbench/Workbench';

function WorkbenchContentM({ children, className, testId, type }: WorkbenchContentProps){
    return (
      <Workbench.Content 
        children={children} 
        className={className} 
        testId={testId}
        type={type} />
    )
}

export default WorkbenchContentM;