import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then((data) => setPosts(data))
  }, []);

  return (
    <Layout>
      <header>
        <h1>Post List</h1>
      </header>
      <main>
        {posts.map(({id, title, userId}) => (
          <article key={id}>
            <h4>
              {title}. {userId}
            </h4>
          </article>
        ))}
      </main>
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
`

export default Posts;