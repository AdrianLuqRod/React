import React from "react";
import "./App.css";
import { TwtitterFollowCard } from "./TwitterFollowCard";

export function App(): JSX.Element {
  return (
    <React.Fragment>
      <div className = "mar">
      <TwtitterFollowCard userName="elrubiusomg" name="Rubén" platform = "youtube" />
      <TwtitterFollowCard userName="RobertDowneyJr" name="Robert" platform = "twitter" />
      <TwtitterFollowCard userName="jordialemany" name="Jordi" platform = "twitter" />
      </div>
    </React.Fragment>
  );
}


