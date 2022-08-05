import React, { useState, useEffect } from "react";
import '../Modal/modal.css'
import styled from "styled-components";

export default function ModalComponent({id, showModal, setShowModal, title, body, user}) {
  const onCloseHandler = () => {
    setShowModal("")
  }

  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(res => res.json())
    .then((data) => setPost(data))
  });

  return (
    <div className={showModal === id ? 'openArticle modal' : 'modal'}>
      <section>
        <header>
          {title}
          <button className="close" onClick={onCloseHandler}>
            &times;
          </button>
        </header>
        <main>
          <Body><h3>{body}</h3></Body>
          <Writer><h4>작성자 {user}</h4></Writer>
          <h4>{post.length} comments</h4>
          {post.map((item, index) => (
            <article key={index}>
              <h5>
                {item.name}
              </h5>
              <h6>
                {item.body}
              </h6>
            </article>
          ))}          
        </main>
      </section>
    </div>
  )
}

const Body = styled.div`
  width: 100%;
  height: auto;
  justify-content: center;
  border-bottom: 1px solid black;
`
const Writer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: row-reverse;
  
`