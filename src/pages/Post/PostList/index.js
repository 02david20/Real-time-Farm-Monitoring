import React, { useState } from "react";
import { Container, Button, Row, Col, Form, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={styles.container}>
      <Row className="pt-3">
        <Col lg="4"></Col>
        <Col lg="4" className={styles.search}>
          <div class="d-flex justify-content-md-center">
            <input
              class="form-control me-2 mt-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-primary mt-2">Search</button>
          </div>
        </Col>
        <Col lg="2" className={styles.add}>
          <Button variant="light" size="lg" onClick={handleShow}>
            Create new post
          </Button>

          <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Tạo bài viết mới</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Tên bài viết</Form.Label>
                  <Form.Control type="text" autoFocus />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Nội dung</Form.Label>
                    <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    config={{         
          toolbar: ['heading', '|', 'bold', 'italic', 'blockQuote', 'link', 'numberedList', 'bulletedList', 'imageUpload', 'insertTable',
            'tableColumn', 'tableRow', 'mergeTableCells', 'mediaEmbed', '|', 'undo', 'redo']
        }}   
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                    />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Hủy
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Đăng bài viết
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
      <Container className={styles.postListWrapper}>
        <h1>{forumnTitle}</h1>
        {postList.map((post,index) => (
          <Row className={styles.postWrapper} key={post.id}>
            <Col lg="8" className="ms-2 me-2">
              <a href="../forumn/forumn-title/post-title">
                <h3>{post.title}</h3>
              </a>
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
