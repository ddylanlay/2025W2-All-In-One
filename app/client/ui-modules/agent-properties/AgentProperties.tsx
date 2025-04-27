import React, { useState } from "react";
import { EditDraftListingModal } from "./components/EditDraftListingModal";

export default function AgentProperties() {
  const [isModalOpen, setModalOpen] = useState(false);

  function toggleModal() {
    console.log("edit draft is working")
    setModalOpen(!isModalOpen);
  }

  return (
    <div>
      <h1>Agent properties</h1>
      <button onClick={toggleModal}>Click this to edit a property listing draft</button>
    </div>
  );
}