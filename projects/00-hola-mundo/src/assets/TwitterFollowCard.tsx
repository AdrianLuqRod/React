import React, { useState } from "react";

type TwitterFollowCardProps = {
  userName: string;
  name: string;
  platform: string;
  formatUserName: (userName: string) => string;
  children?: React.ReactNode;
};

export function TwtitterFollowCard(
  arg: TwitterFollowCardProps
): React.ReactElement {
  const [isFollowing, setIsFollowing]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState(false);

  const text: string = isFollowing ? "Siguiendo" : "Seguir";

  const buttonClassName: string = isFollowing
    ? "tw-followCard-button isFollowing"
    : "tw-followCard-button";

  const handleClick: () => void = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${arg.platform}/${arg.userName}`}
          alt="avatar_midudev"
        />
        <div className="followCard-info">
          <strong>{arg.name}</strong>
        </div>
        <span className="tw-followCard-infoUserName">
          {arg.formatUserName(arg.userName)}
        </span>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
