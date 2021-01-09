import './App.css';
import InputComment from './components/InputComment';
import CommentList from './components/CommentList';
import { useState } from 'react';

function App() {
  const [posts, setPosts] = useState(null)

  return (
    <div className="App">
      <InputComment/>
      <CommentList/>
    </div>
  );
}

export default App;
