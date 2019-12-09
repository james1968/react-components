import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard/>
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        comment="Hi how are you?"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Tom"
        timeAgo="Today at 11:15am"
        comment="Hi how are you?"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Non"
        timeAgo="Today at 3:35PM"
        comment="Hi how are you?"
        avatar={faker.image.avatar()}
      />
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));
