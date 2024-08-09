import React from 'react';
import Card from './Card';
import ArticleList from './List';
import './css/Card.css';

const Tutorial = () => {
  const tutorials = ArticleList.slice(3, 6); // Adjust the slice according to the number of tutorials you want to show
  return (
    <div className='section'>
      <h2 className='section-title'>Featured Tutorials</h2>
      <div className='row'>
        {tutorials.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            name={item.name}
            description={item.description}
            star={item.star}
            author={item.author}
          />
        ))}
      </div>
      <div className='button-container'>
        <button className='see-more-button'>See all tutorials</button>
      </div>
    </div>
  );
};

export default Tutorial;  // Export the Tutorial component for use in other parts of the app
