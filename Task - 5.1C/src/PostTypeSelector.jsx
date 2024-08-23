import React, { useState } from 'react';
import './css/PostTypeSelector.css';
import Question from './QuestionForm';
import Article from './ArticleForm';

function PostTypeSelector() {
  const [post, setPost] = useState();

  return (
    <div>
      <div className='select'>
        Select Post Type:
        <div className='but'>
          <input
            type='radio'
            name='Post Type'
            value='Questions'
            onClick={() => setPost(true)}
          />
          Questions
        </div>
        <div>
          <input
            type='radio'
            name='Post Type'
            value='Articles'
            onClick={() => setPost(false)}
          />
          Articles
        </div>
      </div>
      <div className='form'>
        <div className='formitem'>What do you want to ask or share </div>
      </div>
      {post === true && <Question />}
      {post === false && <Article />}
    </div>
  );
}
export default PostTypeSelector;
