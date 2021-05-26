import React from "react";
import { Workbench, WorkbenchHeaderProps } from '../Workbench/Workbench';

function WorkbenchHeaderM({ actions, className, description, icon, onBack, testId, title }: WorkbenchHeaderProps){
    return (
      <Workbench.Header 
        actions={actions} 
        className={className} 
        description={description} 
        icon={icon}
        onBack={onBack}
        testId={testId}
        title={title} />
    )
}

export default WorkbenchHeaderM;