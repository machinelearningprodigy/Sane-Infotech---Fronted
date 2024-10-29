import React from 'react';
import './Results.css';

const tiles = [
  {
    backgroundImage: '/images/people.jpg',
    title: 'KAMISORI®',
    description: '47% increase in new customers.',
    ctr: '65% Increase in CTR',
    cpa: '37% Reduction in CPA',
  },
  {
    backgroundImage: '/images/cosmetics.png',
    title: "Luchiano's Armoire®",
    description: '55% increase in new collection sales.',
    ctr: '83% Increase in CTR',
    cpa: '42% Reduction in CPA',
  }, 
  {
    backgroundImage: '/images/kamisori.png',
    title: 'Another Client®',
    description: '57% increase in online visibility.',
    ctr: '79% Increase in CTR',
    cpa: '38% Reduction in CPA',
  },
  {
    backgroundImage: '/images/skyborne.png',
    title: 'Final Client®',
    description: '72% boost in product awareness.',
    ctr: '89% Increase in CTR',
    cpa: '44% Reduction in CPA',
  },
  {
    backgroundImage: '/images/armoire.png',
    title: 'Final Client®',
    description: '72% boost in product awareness.',
    ctr: '89% Increase in CTR',
    cpa: '44% Reduction in CPA',
  }
];

const Results = () => {
  return (
    <div className="results-container">
    <button className="result-button">Results</button>
      <div className="results-title">
        Results speak for <span>themselves.</span>
      </div>
      <p className="results-subtitle">
        We've worked across a number of industries and have achieved some<br/> incredible results with some incredible people and brands.
      </p>
      <div className="carousel">
        <div className="tiles-container">
          {tiles.map((tile, index) => (
            <div
              className="tile"
              key={index}
              style={{
                backgroundImage: `url(${tile.backgroundImage})`
              }}
            >
              <div className="tile-overlay">
                <div className="tile-content">
                  <h3>{tile.title}</h3>
                  <p>{tile.description}</p>
                  <div className="metrics">
                    <span className="metric">{tile.ctr}</span>
                    {tile.cpa && <span className="metric">{tile.cpa}</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;