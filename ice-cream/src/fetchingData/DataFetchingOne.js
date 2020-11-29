import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetchingOne() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then(res => {
        setLoading(false);
        setError('');
        setPost(res.data);
      })
      .catch(err => {
        setLoading(false);
        setPost({});
        setError(`Something went Wrong !!!`);
      });
  }, []);
  //const [title, body, id] = post; // kano aita hoilo nah bujlam nah
  return (
    <div className="article">
      {error ? error : null}
      {loading ? 'Loading...' : post.title}
    </div>
  );
}

export default DataFetchingOne;
