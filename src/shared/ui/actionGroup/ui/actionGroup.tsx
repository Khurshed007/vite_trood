import React from "react";
import { cn } from "../../../lib/cn";
import { actionGroupVariants } from "../lib/actionGroupVariants";
import type { ActionGroupProps } from "../types/actionTypes";

const ActionGroup: React.FC<ActionGroupProps> = ({
  children,
  layout,
  alignment,
  spacing,
  className,
}) => {
  return (
    <div className={cn(actionGroupVariants({ layout, alignment, spacing }), className)}>
      {children}
    </div>
  );
};

export { ActionGroup };