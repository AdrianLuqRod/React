import React from "react";
import "./App.css";
import { TwtitterFollowCard } from "./TwitterFollowCard";

export function App(): JSX.Element {
  const formatUserName = (userName: string) => `@${userName.toLowerCase()}`;
  return (
    <section className="Mar">
      <TwtitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="ELRUBIUSOMG"
        name="Rubén"
        platform="youtube"
      />

      <TwtitterFollowCard
        formatUserName={formatUserName}
        isFollowing={false}
        userName="RobertDowneyJr"
        name="Robert"
        platform="twitter"
      />

      <TwtitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="JordiALEMANY"
        name="Jordi"
        platform="twitter"
      />
    </section>
  );
}
