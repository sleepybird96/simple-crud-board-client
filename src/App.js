import './App.css';
import InputComment from './components/InputComment';
import CommentList from './components/CommentList';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const getPosts = ()=>{
    axios("https://server.gsang2board.click/posts",{withCredentials:true})
    .then(res=>res.data)
    .then((posts)=>{
      setPosts(posts)
    })
  }

  useEffect(()=>{
    getPosts();
  },[])

  return (
    <div className="App">
      <InputComment getPosts={getPosts}/>
      <CommentList
        posts={posts}
        getPosts={getPosts}
      />
    </div>
  );
}

export default App;
