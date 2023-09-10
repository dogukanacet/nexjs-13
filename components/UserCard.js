"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const UserCard = () => {
  const navLinks = [
    {
      label: "Home",
      href: "/",
      iconPath: "/assets/home-icon.svg",
    },
    {
      label: "Comments",
      href: "/comments",
      iconPath: "/assets/comments-icon.svg",
    },
  ];
  return (
    <div className="card-wrapper">
      <div class="card">
        <div class="ds-top"></div>
        <div class="avatar-holder">
          <img
            className="img"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1820405/profile/profile-512.jpg?1533058950"
            alt="Albert Einstein"
          />
        </div>
        <div class="name">
          <a className="link" href="https://codepen.io/AlbertFeynman/" target="_blank">
            Albert Feynman
          </a>
          <h6 className="follow" title="Followers">
            <i class="fas fa-users"></i> <span class="followers">90</span>
          </h6>
        </div>
        <div class="button">
          <a href="#" class="btn" onmousedown="follow();">
            Follow <i class="fas fa-user-plus"></i>
          </a>
        </div>
        <div class="ds-info">
          <div class="ds pens">
            <h6 title="Number of pens created by the user">
              Pens <i class="fas fa-edit"></i>
            </h6>
            <p>29</p>
          </div>
          <div class="ds projects">
            <h6 title="Number of projects created by the user">
              Projects <i class="fas fa-project-diagram"></i>
            </h6>
            <p>0</p>
          </div>
          <div class="ds posts">
            <h6 title="Number of posts">
              Posts <i class="fas fa-comments"></i>
            </h6>
            <p>0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
