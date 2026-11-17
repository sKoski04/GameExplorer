import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header.jsx';
import { trendingGames } from './Content/trendingGames.js';
import TrendingGames from './components/TrendingGames.jsx';
import { news } from './Content/news.js';
import NewsFeed from './components/NewsFeed/NewsFeed.jsx';
import './App.css';
import { horror } from './Content/horror.js';
import { esports } from './Content/esports.js';
import { documentaries } from './Content/documentaries.js';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Pagination from 'react-bootstrap/Pagination';

function Discover() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredGames = esports.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.trim().toLowerCase()),
  );

  return (
    <>
      <Header />
      <main className="discover-page">
        <section className="discover-hero" aria-labelledby="discover-title">
          <p className="discover-eyebrow">THE GAME COLLECTION</p>
          <h1 id="discover-title">Find your next favorite.</h1>
          <p className="discover-intro">
            Explore a hand-picked collection of games, from all-time classics to new worlds.
          </p>
          <label className="game-search">
            <span className="visually-hidden">Search games</span>
            <span className="game-search-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <circle cx="10.8" cy="10.8" r="6.8" />
                <path d="m16 16 4.2 4.2" />
              </svg>
            </span>
            <input
              type="search"
              placeholder="Search games..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </label>
        </section>

        <section className="game-catalog" aria-labelledby="catalog-title">
          <div className="catalog-heading">
            <div>
              <p className="discover-eyebrow">PICK YOUR NEXT ADVENTURE</p>
              <h2 id="catalog-title">Explore games</h2>
            </div>
            <p className="game-count" aria-live="polite">
              {filteredGames.length} {filteredGames.length === 1 ? 'game' : 'games'}
            </p>
          </div>

          {filteredGames.length > 0 ? (
            <Row xs={2} md={3} lg={4} className="g-3 g-lg-4">
              {filteredGames.map((game) => (
                <Col key={game.id}>
                  <Card className="game-card">
                    <div className="game-card-art">
                      <img
                        src={game.image}
                        alt=""
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.style.display = 'none';
                        }}
                      />
                      <span className="game-card-number">
                        {String(game.id).padStart(2, '0')}
                      </span>
                    </div>
                    <Card.Body>
                      <Card.Title>{game.name}</Card.Title>
                      <span className="game-card-label">Discover game</span>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <div className="empty-games">
              <h3>No games found</h3>
              <p>Try a different title or clear your search.</p>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

function Videos() {
    const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;
  const totalPages = Math.ceil(horror.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const visibleCards = horror.slice(startIndex, startIndex + cardsPerPage);
  return (
    <>
      <Header></Header>
       <section style={{ width: '90vw', minHeight: '20vh',color:'white', backgroundColor: 'rgb(13, 13, 13)', borderRadius: '4vh', marginInlineStart: '4vw', marginTop: '4vh',alignItems:'center',justifyContent:'center',display:'flex',fontFamily:'system-ui' }}>
<h1>Welcome to videoHub. Here you can stream game-related videos.</h1>
       </section>
      <section style={{ width: '90vw', minHeight: '100vh', color:'white', backgroundColor: 'rgb(13, 13, 13)', borderRadius: '4vh', marginInlineStart: '4vw', marginTop: '14vh' }}>
        <div key={currentPage}>
          <Row style={{ marginInline: '2vh' }} xs={1} md={5} className="g-4">
            {visibleCards.map((item, index) => (
              <Col key={`${item.name}-${index}`}>
              
                  <Card style={{ width: '18rem',height:'40vh', backgroundColor: 'black', color: 'white',marginInline:'4vh' }}>
                    <Card.Body>
                   <iframe width="100%" height="90%" src={item.videoURL} title="YouTube video player" frameborder="0" allow='fullscreen' allowFullScreen ></iframe>
                   </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', paddingBottom: '2rem' }}>
          <Pagination>
            <Pagination.First onClick={() => setCurrentPage(1)} disabled={currentPage === 1} />
            <Pagination.Prev onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} disabled={currentPage === 1} />
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1;
              return (
                <Pagination.Item
                  key={pageNumber}
                  active={pageNumber === currentPage}
                  onClick={() => setCurrentPage(pageNumber)}
                  style={{backgroundColor:'yellow'}}
                >
                  {pageNumber}
                </Pagination.Item>
              );
            })}
            <Pagination.Next onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} />
            <Pagination.Last onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages} />
          </Pagination>
        </div>
      </section>
    </>
  );
}

function Home() {
  const fanFavorites = trendingGames;
  const warGames = esports.filter((game) =>
    ['Call of Duty: WWII', 'Rainbow Six Siege', 'Battlefield 2042', 'Counter-Strike 2', 'Valorant'].includes(
      game.name,
    ),
  );
  const sportGames = esports.filter((game) =>
    ['Mario Kart 8', 'Forza Horizon 6'].includes(game.name),
  );

  return (
    <>
      <Header />
      <NewsFeed news={news} />
      <TrendingGames games={trendingGames} />
      <TrendingGames
        games={fanFavorites}
        title="Fan Favourites"
        eyebrow="LOVED BY PLAYERS"
        sectionId="fan-favourites"
      />
      <TrendingGames
        games={warGames}
        title="Top War Games"
        eyebrow="BATTLEFIELD PICKS"
        sectionId="top-war-games"
      />
      <TrendingGames
        games={sportGames}
        title="Trending Sport Games"
        eyebrow="RACE TO THE TOP"
        sectionId="trending-sport-games"
      />
      <TrendingGames
        games={documentaries}
        title="Trending People"
        eyebrow="CREATORS TO WATCH"
        sectionId="trending-people"
      />
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
      <footer className="site-footer">all rights reserved GameDB 2026</footer>
    </>
  );
}

export default App
