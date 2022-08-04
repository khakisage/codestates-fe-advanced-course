import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ModalComponent from "../Modal/ModalComponent";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState("");
  const onModalHandler = id => {
    setShowModal(id);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then((data) => setPosts(data))
  }, []);

  return (
    <>
      <Layout>
        <Header>
          <h1>Bulletin Board</h1>
        </Header>
        <Main>
          {posts.map((item) => (
            <Article key={item.id}>
              <Title>
                <h4>
                  {item.title} <button onClick={() => onModalHandler(item.id)}>more</button>
                </h4>
                <ModalComponent id={item.id} user={item.userId} showModal={showModal} setShowModal={setShowModal} title={item.title} body={item.body}/>
              </Title>
              <User>
                <h4>
                  작성자 {item.userId}
                </h4>
              </User>
            </Article>
          ))}
        </Main>
      </Layout>
    </>
  )
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  margin: 0 auto;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 10vh;
  width: 100vw;
  background-color: black;

  h1 {
    color: white;
  }
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3vh;
  @media screen and (max-width: 670px) {
    h4 { font-size: 7px }
  }
`

const Article = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: solid 1px gray;
  width: 80vw;
  justify-content: space-between;
`

const Title = styled.div`
width: 75vw;
  font-size: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  button {
    width: 3em;
    height: 3em;
    outline: none;
    cursor: pointer;
    border: 0;
  }
`

const User = styled.div`
  font-size: 1em;
`

export default Posts;