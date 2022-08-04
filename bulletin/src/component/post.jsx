import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ModalComponent from "../Modal/ModalComponent";
import Pagination from "./pagination";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState("");
  const limit = 10;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

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
          {posts.slice(offset, offset + limit).map((item) => (
            <Article key={item.id}>
              <Title>
                <h4>
                  {item.title} 
                </h4>
                <button onClick={() => onModalHandler(item.id)}>more</button>
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
        <footer>
          <Pagination
            total={posts.length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        </footer>
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
  padding-top: 1vh;
  height: 80vh;
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
  height: 7.7vh;
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
  font-size: 0.8em;
`

export default Posts;