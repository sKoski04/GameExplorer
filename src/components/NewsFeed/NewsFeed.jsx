import './../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Stack from 'react-bootstrap/Stack';

function NewsFeed({ news }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div id="Discover" className="game-list-section">
      <div className="carousel-wrapper">
        <Carousel
          activeIndex={activeIndex}
          interval={5000}
          onSelect={setActiveIndex}
          wrap
        >
          {news.map((item) => (
            <Carousel.Item key={item.id}>
              <img className="img" src={item.thumbnail} alt="" />
              <Carousel.Caption>
                <h2>{item.header}</h2>
                <p>{item.text}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <section className="news-wrapper" aria-labelledby="top-news-title">
        <div className="news-heading">
          <div>
            <p className="news-eyebrow">LATEST STORIES</p>
            <h3 id="top-news-title">Top Gaming News</h3>
          </div>
          <span className="news-count">{news.length} UPDATES</span>
        </div>
        <Stack gap={2} className="featured-news">
          {news.map((item, index) => (
            <button
              className={`news-feed${activeIndex === index ? ' active' : ''}`}
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={activeIndex === index}
              aria-label={`Show ${item.header} in the image scroller`}
            >
              <span className="news-number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="news-content">
                <p className="news-date">
                  PUBLISHED{' '}
                  <time dateTime={item.published}>
                    {new Date(item.published).toLocaleString(undefined, {
                      dateStyle: 'medium',
                      timeStyle: 'short',
                    })}
                  </time>
                </p>
                <h4 className="news-title">{item.header}</h4>
                <p className="news-excerpt">{item.text}</p>
              </div>
            </button>
          ))}
        </Stack>
      </section>
    </div>
  );
}

export default NewsFeed;