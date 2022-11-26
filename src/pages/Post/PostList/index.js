import React, { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faComments,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";

import styles from "./postList.module.css";

const forumnTitle = "Post title is not long enough for me";
const postList = [];
for (let i = 1; i < 20; i++) {
  postList.push({
    id: i,
    title:
      "Đây là tiêu đề của post, mặc dù mình muốn cho nó dài nhưng lại chả biết ghi gì cả",
    author: "Hung Nguyen",
    dateCreated: "25-11-2022",
    view: 100,
    comment: 100,
    like: 100,
  });
}

function PostList() {
  return (
    <div className={styles.container}>
      <Button variant="light" className="mt-3 mb-3">
        +
      </Button>
      <Container className={styles.postListWrapper}>
        <h1>{forumnTitle}</h1>
        {postList.map((post) => (
          <Row className={styles.postWrapper} key={post.id}>
            <Col lg="8" className="ms-2 me-2">
              <h3>{post.title}</h3>
              <p>
                <b>Author</b>: {post.author}
                <br />
                <b>Date created</b>: {post.dateCreated}
                <br />
                <b>Topic id</b>: {post.id}
              </p>
            </Col>
            <Col lg="1"></Col>
            <Col lg="2" className="d-flex align-items-center">
              <div className={styles.postInfo}>
                <Row>
                  <Col className="d-flex ms-4">
                    <FontAwesomeIcon icon={faEye} />
                    <p className="ms-3">{post.view}</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex ms-4">
                    <FontAwesomeIcon icon={faComments} />
                    <p className="ms-3">{post.comment}</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex ms-4">
                    <FontAwesomeIcon icon={faHeart} />
                    <p className="ms-3">{post.like}</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
}

export default PostList;
