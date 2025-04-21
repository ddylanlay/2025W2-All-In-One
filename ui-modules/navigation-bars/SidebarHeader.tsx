import React from "react";
import { Button } from "../../@/components/ui/button";
import { EscapeIcon } from "../theming/Icons/EscapeIcon";

interface SidebarHeaderProps {
  title?: string;
  onClose: () => void;
}

export const SidebarHeader = ({ title = "Navigation", onClose }: SidebarHeaderProps) => (
  <div className="flex justify-between items-center p-4 border-b">
    <span className="text-lg font-semibold">{title}</span>
    <Button variant="outline" size="icon" onClick={onClose}>
      <EscapeIcon variant="light" />
    </Button>
  </div>
);
