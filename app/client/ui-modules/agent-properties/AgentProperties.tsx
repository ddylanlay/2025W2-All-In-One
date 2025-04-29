import React from "react";
import EditDraftListingModal from "./components/EditDraftListingModal";

export function AgentProperties() {
  const { isOpen, toggle, ModalUI } = EditDraftListingModal();

  return (
    <div>
      <h1>Agent properties</h1>
      <button onClick={toggle}>Click this to edit a property listing draft</button>
      {ModalUI}
    </div>
  );
}