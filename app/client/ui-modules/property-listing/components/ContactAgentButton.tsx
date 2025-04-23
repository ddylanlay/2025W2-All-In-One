import React from "react";
import {
  ThemedButton,
  ThemedButtonVariants,
} from "/app/client/ui-modules/theming/components/ThemedButton";
import { twMerge } from "tailwind-merge";

export function ContactAgentButton({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}): React.JSX.Element {
  return (
    <ThemedButton
      variant={ThemedButtonVariants.PRIMARY}
      onClick={onClick}
      className={twMerge("w-[128px]", className)}
    >
      <span className="text-[14px]">Contact Agent</span>
    </ThemedButton>
  );
}
