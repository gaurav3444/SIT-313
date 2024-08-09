import React from 'react';
import Card from './Card';
import ArticleList from './List';
import './css/Card.css';

const Article = () => {
  const articles = ArticleList.slice(0, 3); // Adjust the slice according to the number of articles you want to show
  return (
    <div className='section'>
      <h2 className='section-title'>Featured Articles</h2>
      <div className='row'>
        {articles.map((item, index) => (
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
        <button className='see-more-button'>See all articles</button>
      </div>
    </div>
  );
};

export default Article;  // Export the Article component for use in other parts of the app
