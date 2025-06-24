import { useEffect, useState } from 'react';
import API from './api';

export default function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.get('/posts').then(res => setPosts(res.data));
  }, []);

  return (
    <div>
      {posts.map(p => (
        <div key={p._id}>
          <h2>{p.title}</h2>
          <p>{p.content}</p>
          <small>by {p.author.username}</small>
        </div>
      ))}
    </div>
  );
}
