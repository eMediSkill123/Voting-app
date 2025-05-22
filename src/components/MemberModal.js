import React from "react";
import Modal from "react-modal";
import { FaTimes, FaCopy } from "react-icons/fa";
import copy from "copy-to-clipboard";

Modal.setAppElement("#root");

export default function MemberModal({ member, onClose }) {
  if (!member) return null;
  return (
    <Modal
      isOpen={!!member}
      onRequestClose={onClose}
      className="member-modal"
      overlayClassName="modal-overlay"
    >
      <button className="modal-close" onClick={onClose}><FaTimes /></button>
      <div className="modal-content">
        <img src={member.avatar} alt={member.name} className="modal-avatar" />
        <h3>{member.name}</h3>
        <div className="modal-dept">{member.department}</div>
        <div className="modal-row">
          <span>Phone number: +91 {member.phone}</span>
          <FaCopy className="copy-icon" onClick={() => copy(member.phone)} title="Copy" />
        </div>
        <div className="modal-row">
          <span>Email id: {member.email}</span>
          <FaCopy className="copy-icon" onClick={() => copy(member.email)} title="Copy" />
        </div>
        <div className="modal-row">
          <span>Department: {member.department}</span>
        </div>
      </div>
    </Modal>
  );
} 