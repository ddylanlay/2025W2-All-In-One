import React, { useEffect, useState } from "react";
import EditDraftListingModal from "./components/EditDraftListingModal";
import Modal from "./components/Modal";
import { ThemedButton, ThemedButtonVariant } from "../theming/components/ThemedButton";
// import { ListingDocument } from "/app/server/database/listing/ListingDocument";
// import { Meteor } from "meteor/meteor";
// import { MeteorMethodIdentifier } from "/app/shared/meteor-method-identifier";

export function AgentProperties() {
  const { isOpen, toggle, ModalUI } = EditDraftListingModal();
  // const [listing, setListing] = useState<any>(null);

  // useEffect(() => {
  //   Meteor.call(MeteorMethodIdentifier.LISTING_GET_ALL, (error: any, result: ListingDocument[]) => {
  //     console.log(MeteorMethodIdentifier.LISTING_GET_ALL);
  //     if (error) {
  //       console.error("Error fetching listings:", error);
  //     } else {
  //       console.log("getting the listing...");
  //       setListing(result[0]);
  //     }
  //   });
  // }, []);

  return (
    <div>
      <h1>Agent properties</h1>
      <button onClick={toggle}>Click this to edit a property listing draft</button>
      {ModalUI}
    </div>
  );
}