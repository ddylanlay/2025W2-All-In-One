import React from "react";
import EditDraftListingModal from "./components/EditDraftListingModal";
import Modal from "./components/Modal";

export default function AgentProperties() {
  const { isOpen, toggle } = EditDraftListingModal();

  return (
    <div>
      <h1>Agent properties</h1>
      <button onClick={toggle}>Click this to edit a property listing draft</button>
      <Modal isOpen={isOpen} toggle={toggle}></Modal>
    </div>
  );
}