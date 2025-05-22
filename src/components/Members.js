import React, { useState } from "react";
import { years, membersByYear } from "../data";
import MemberModal from "./MemberModal";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Members() {
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [tab, setTab] = useState("all");
  const [modalMember, setModalMember] = useState(null);

  const members = membersByYear[selectedYear] || [];
  const voted = members.filter(m => m.voted);
  const notVoted = members.filter(m => !m.voted);

  let displayed = members;
  if (tab === "voted") displayed = voted;
  if (tab === "notVoted") displayed = notVoted;

  return (
    <div className="screen">
      <h2>Members</h2>
      <div className="years-list">
        {years.map(year => (
          <button
            key={year}
            className={year === selectedYear ? "year-btn selected" : "year-btn"}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </button>
        ))}
      </div>
      <div className="tabs">
        <button className={tab === "all" ? "tab selected" : "tab"} onClick={() => setTab("all")}>All <span className="tab-count">{members.length}</span></button>
        <button className={tab === "voted" ? "tab selected" : "tab"} onClick={() => setTab("voted")}>Voted <span className="tab-count green">{voted.length}</span></button>
        <button className={tab === "notVoted" ? "tab selected" : "tab"} onClick={() => setTab("notVoted")}>Not Voted <span className="tab-count red">{notVoted.length}</span></button>
      </div>
      <div className="members-list">
        {displayed.map(member => (
          <div className="member-row" key={member.id}>
            <img src={member.avatar} alt={member.name} className="avatar" />
            <div className="member-info" onClick={() => setModalMember(member)}>
              <div className="member-name">{member.name}</div>
              <div className="member-dept">{member.department}</div>
            </div>
            <div className={member.voted ? "status voted" : "status not-voted"}>
              {member.voted ? "Voted" : "Not Voted"}
            </div>
            <a href={`tel:${member.phone}`} className="icon-btn" title="Call">
              <FaPhone />
            </a>
            <a
              href={`https://wa.me/91${member.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              title="WhatsApp"
            >
              <FaWhatsapp color="#25D366" />
            </a>
          </div>
        ))}
      </div>
      <MemberModal member={modalMember} onClose={() => setModalMember(null)} />
    </div>
  );
} 