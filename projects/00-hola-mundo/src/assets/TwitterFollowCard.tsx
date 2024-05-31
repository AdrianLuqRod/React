type TwitterFollowCardProps = {
  userName: string;
  name: string;
};

export function TwtitterFollowCard(
  arg: TwitterFollowCardProps
): React.ReactElement {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${arg.name}`}
          alt="avatar_midudev"
        />
        <div className="followCard-info">
          <strong>{arg.name}</strong>
        </div>
        <span className="tw-followCard-infoUserName">@{arg.userName}</span>
      </header>
      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
