import axios from "axios";
import { useEffect, useState } from "react";
import "./Posts.css";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [currentId, setCurrentId] = useState(0);
  const postUrl = "https://jsonplaceholder.typicode.com/posts/";
  const commentUrl = "https://jsonplaceholder.typicode.com/comments/";

  async function getComments(postId) {
    const index = posts.findIndex((post) => post.id === postId);
    if(!posts[index].comments){
      const res = await axios.get(commentUrl + "?postId=" + postId);
      console.log("comment", res.data);
      const newPost = [...posts];
      newPost.splice(index, 1, { ...posts[index], comments: res.data });
      setPosts(newPost);
    }
    
  }

  const handleClick = (postId) => {
    getComments(postId);
    setCurrentId(postId);
  };

  useEffect(() => {
    async function getPosts() {
      const res = await axios.get(postUrl);
      console.log("post", res.data);
      setPosts(res.data);
    }

    getPosts();
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <div className='post'>
            {post.id}. {post.title}
            <button onClick={() => handleClick(post.id)}>Comments</button>
          </div>
          {post.comments ? (
            <div
              style={post.id === currentId ? {} : { display: "none" }}
              className='comment'
            >
              {post.comments.map((comment) => (
                <div key={comment.id}>
                  <ol>
                    <span>
                      {comment.id < 6
                        ? comment.id
                        : comment.id - (comment.postId - 1) * 5}
                      .
                    </span>
                    <li>{comment.body}</li>
                  </ol>
                  <ul>
                    <li>
                      <span>by</span> {comment.name}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default Posts;
