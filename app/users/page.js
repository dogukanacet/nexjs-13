"use client";

import React, { useEffect, useState } from "react";
import UserCard from "@components/UserCard";

const Users = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const res = await fetch(`/api/users`);
    const data = await res.json();

    setUserData(data);
  };

  const renderUserCards = () => {
    if (userData) {
      return userData.map((user) => {
        return <UserCard user={user} key={user.id} />;
      });
    }
  };

  return <div className="cards-container">{renderUserCards()}</div>;
};

export default Users;
