import React from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const formatUserName = (userName) => `@${userName}`;

  return (
    <div>
      <TwitterFollowCard
        initialIsFollowing={true}
        formatUserName={formatUserName}
        userName="midudev"
      >
        <h1>Miguel</h1>
      </TwitterFollowCard>
      <TwitterFollowCard
        initialIsFollowing={false}
        formatUserName={formatUserName}
        userName="laumr_"
      >
        <h1>Laura</h1>
      </TwitterFollowCard>
    </div>
  );
}
