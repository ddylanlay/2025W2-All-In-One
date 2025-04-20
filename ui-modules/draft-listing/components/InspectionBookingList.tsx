import React from 'react'
import { ThemedButton } from '/library-modules/theming/components/ThemedButton'

export type InspectionBookingListUiState = [{
  "date": string,
  "startingTime": string,
  "endingTime": string
}]

export function InspectionBookingList({
  uiStateList,
  className=""
}:{
  uiStateList: InspectionBookingListUiState,
  className?: string
}): React.JSX.Element {
  return (
    <ThemedButton>
      <span className="text-white">Test</span>
    </ThemedButton>
  )
}

function BookingButton({
  className=""
} : {
  className?: string
}): React.JSX.Element {
  return <h1>Hi</h1>
}