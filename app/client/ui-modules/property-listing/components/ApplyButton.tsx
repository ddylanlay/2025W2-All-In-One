import React from "react";
import {
  ThemedButton,
  ThemedButtonVariants,
} from "/app/client/ui-modules/theming/components/ThemedButton";
import { twMerge } from "tailwind-merge";

export function ApplyButton({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}): React.JSX.Element {
  return (
    <ThemedButton
      variant={ThemedButtonVariants.SECONDARY}
      onClick={onClick}
      className={twMerge("w-[128px]", className)}
    >
      <span className="text-[14px]">Apply</span>
    </ThemedButton>
  );
}
