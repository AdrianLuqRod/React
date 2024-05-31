import "./App.css";
import { TwtitterFollowCard } from "./TwitterFollowCard";

export function App(): JSX.Element {
  return (
    <React.Fragment>
      <TwtitterFollowCard userName="midudev" name="Miguel Ángel Durán" />;
    </React.Fragment>
  );
}
