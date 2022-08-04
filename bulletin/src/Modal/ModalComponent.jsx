import React, { useState, useEffect } from "react";
import '../Modal/modal.css'
export default function ModalComponent({id, showModal, setShowModal, title, body, user}) {
  const onCloseHandler = () => {
    setShowModal("")
  }

  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(res => res.json())
    .then((data) => setPost(data))
    console.log('count')
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
            작성자 {user}<br/>{body}
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