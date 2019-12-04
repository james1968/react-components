import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam"/>
      <CommentDetail author="Tom"/>
      <CommentDetail author="Non"/>
      <CommentDetail author="Sonny"/>
      <CommentDetail author="Willy"/>
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));
