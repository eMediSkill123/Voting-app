import React, { useState } from "react";
import { posts } from "../data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MemberModal from "./MemberModal";

export default function Feed() {
  const [modalMember, setModalMember] = useState(null);
  return (
    <div className="feed-container">
      {posts.map(post => (
        <div className="feed-post" key={post.id}>
          <div className="feed-header">
            <img
              src={post.user.avatar}
              alt={post.user.name}
              className="avatar clickable"
              onClick={() => setModalMember({
                ...post.user,
                department: post.user.department || "Student",
                phone: post.user.phone || "9876543210",
                email: post.user.email || "user@email.com"
              })}
            />
            <span
              className="feed-username clickable"
              onClick={() => setModalMember({
                ...post.user,
                department: post.user.department || "Student",
                phone: post.user.phone || "9876543210",
                email: post.user.email || "user@email.com"
              })}
            >
              {post.user.name}
            </span>
            <span className="feed-date">{new Date(post.timestamp).toLocaleDateString()}</span>
          </div>
          {post.images.length === 1 ? (
            <img src={post.images[0]} alt="" className="feed-image" />
          ) : (
            <Carousel showThumbs={false} showStatus={false} infiniteLoop>
              {post.images.map((img, idx) => (
                <div key={idx}>
                  <img src={img} alt="" className="feed-image" />
                </div>
              ))}
            </Carousel>
          )}
          <div className="feed-caption">{post.caption}</div>
          <div className="feed-actions">
            <span className="feed-action">❤ 234</span>
            <span className="feed-action">💬 15</span>
            <span className="feed-action">🔄 10</span>
          </div>
        </div>
      ))}
      <MemberModal member={modalMember} onClose={() => setModalMember(null)} />
    </div>
  );
} 