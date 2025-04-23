import React from "react";
import { MultipleHousesIcon } from "../../theming/icons/MultipleHousesIcon";
import { CalendarIcon } from "../../theming/icons/CalendarIcon";



const getMultipleHousesIcon = () => React.createElement(MultipleHousesIcon, { variant: "light" });
const getCalendarIcon = () => React.createElement(CalendarIcon);


export const agentLinks = [
  { to: "/", label: "Overview" },
  {
    to: "/properties",
    label: "Managed Properties",
    icon: getMultipleHousesIcon,
  },
  {
    to: "/calendar",
    label: "Calendar",
    icon: getCalendarIcon,
  },
  {
    to: "/tasks",
    label: "Tasks",
    icon: getCalendarIcon,
  },
];

export const landlordLinks = [
  { to: "/", label: "Overview" },
  {
    to: "/properties",
    label: "Managed Properties",
    icon: getMultipleHousesIcon,
  },
  {
    to: "/calendar",
    label: "Calendar",
    icon: getCalendarIcon,
  },
  {
    to: "/tasks",
    label: "Tasks",
    icon: getCalendarIcon,
  },
];

export const tenantLinks = [
  { to: "/", label: "Overview" },
  {
    to: "/properties",
    label: "Managed Properties",
    icon: getMultipleHousesIcon,
  },
  {
    to: "/calendar",
    label: "Calendar",
    icon: getCalendarIcon,
  },
  {
    to: "/tasks",
    label: "Tasks",
    icon: getCalendarIcon,
  },
];
