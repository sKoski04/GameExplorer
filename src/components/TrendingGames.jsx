function TrendingGames({
  games,
  title = 'Trending Games',
  eyebrow = "PLAY WHAT'S POPULAR",
  sectionId = 'trending-games',
}) {
  return (
    <section className="trending-games" aria-labelledby={`${sectionId}-title`}>
      <div className="trending-games-heading">
        <div>
          <p className="trending-games-eyebrow">{eyebrow}</p>
          <h2 id={`${sectionId}-title`}>{title}</h2>
        </div>
      </div>
      <div className="trending-games-grid">
        {games.map((game) => {
          const card = (
            <>
              <img src={game.image ?? game.thumbnail} alt="" loading="lazy" />
              <div className="trending-game-details">
                <h3>{game.name}</h3>
                <span>
                  {game.link
                    ? 'Visit official site'
                    : game.badges?.join(', ') || 'Featured'}
                </span>
              </div>
            </>
          );

          return game.link ? (
            <a
              className="trending-game-card"
              href={game.link}
              key={game.id}
              target="_blank"
              rel="noreferrer"
            >
              {card}
            </a>
          ) : (
            <article className="trending-game-card" key={game.id}>
              {card}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default TrendingGames;
