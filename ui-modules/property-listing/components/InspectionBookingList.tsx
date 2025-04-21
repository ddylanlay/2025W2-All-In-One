import React from "react";
import { ThemedButton } from "/library-modules/theming/components/ThemedButton";
import { Divider } from "/library-modules/theming/components/Divider";
import { CalendarIcon } from "/library-modules/theming/icons/CalendarIcon";

export type InspectionBookingListUiState = {
  date: string;
  startingTime: string;
  endingTime: string;
};

export function InspectionBookingList({
  bookingUiStateList,
  onBook,
  className = "",
}: {
  bookingUiStateList: InspectionBookingListUiState[];
  onBook: (index: number) => void;
  className?: string;
}): React.JSX.Element {
  return (
    <div
      className={`flex flex-col w-[520px] border-[1.5px] border-(--divider-color) rounded-lg py-3 px-4 ${className}`}
    >
      {bookingUiStateList.map((state, i) => (
        <BookingEntry
          key={`${state.date}${state.startingTime}`}
          bookingState={state}
          shouldDisplayDivider={i != 0}
          index={i}
          onBook={onBook}
        />
      ))}
    </div>
  );
}

function BookingEntry({
  bookingState,
  shouldDisplayDivider,
  index,
  onBook,
  className = "",
}: {
  bookingState: InspectionBookingListUiState;
  shouldDisplayDivider: boolean;
  index: number;
  onBook: (index: number) => void;
  className?: string;
}): React.JSX.Element {
  return (
    <div className={`flex flex-col ${className}`}>
      {shouldDisplayDivider ? <Divider /> : ""}

      <div className="flex flex-row items-center">
        <BookingDateTime
          date={bookingState.date}
          startingTime={bookingState.startingTime}
          endingTime={bookingState.endingTime}
          className="mr-auto"
        />
        <CalendarIcon className="w-[22px] h-[20px] mr-6" />
        <BookingButton index={index} onBook={onBook} />
      </div>
    </div>
  );
}

function BookingDateTime({
  date,
  startingTime,
  endingTime,
  className = "",
}: {
  date: string;
  startingTime: string;
  endingTime: string;
  className?: string;
}): React.JSX.Element {
  return (
    <div className={className}>
      <span className="geist-medium block">{date}</span>
      <span className="geist-regular">{`${startingTime} - ${endingTime}`}</span>
    </div>
  );
}

function BookingButton({
  index,
  onBook,
  className = "",
}: {
  index: number;
  onBook: (index: number) => void;
  className?: string;
}): React.JSX.Element {
  return (
    <ThemedButton
      onClick={() => {
        onBook(index);
      }}
      className={`w-[117px] h-[36px] ${className}`}
    >
      <span className="text-white">Book</span>
    </ThemedButton>
  );
}
