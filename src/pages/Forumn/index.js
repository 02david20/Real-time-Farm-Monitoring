import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import { Container, Col, Row, Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import styles from "./forumn.module.css";

const forumnList = [];
for (let i = 0; i < 5; i++) {
  forumnList.push({
    forumnInfo: {
      title: "Tuyệt vời lắm cháu",
      host: "Danh Nguyen",
      dateCreated: "00-00-0000",
      detail: "Forumn này toàn là sự tramkam"
    },
    newestPost: {
      title: "Đây là post đầy hành",
      dateCreated: "00-00-0000",
      author: "Danh Nguyen"
    },
    stats: {
      user: 100,
      post: 100
    }
  })
}

function Forumn() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={styles.main}>
      <Row className="pt-3">
        <Col lg="4"></Col>
        <Col lg="4" className={styles.search}>
          <div class="d-flex justify-content-md-center">
            <input class="form-control me-2 mt-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-primary mt-2">Search</button>
          </div>
        </Col>
        <Col lg="2" className={styles.add}>
          <Button variant="light" size="lg" onClick={handleShow}>
            Create forumn
          </Button>
          
          <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Tạo diễn đàn mới</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Tên diễn đàn</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Mô tả</Form.Label>
                  <Form.Control as="textarea" rows={6} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Hủy
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Tạo diễn đàn
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
      <Container className={styles.container}>
        {forumnList.map((forumn) => (
          <Row className={styles.forumn}>
            <Col lg="5" className="align-items-center">
              <div className="ms-2">
                <Link to="/forumn/forumn-title" className={styles.link}>
                  <Row className={styles.forumnTitle}>
                    {forumn.forumnInfo.title}
                  </Row>
                </Link>
                <Row className={styles.forumnHost}>
                  Host: {forumn.forumnInfo.host}
                </Row>
                <Row className={styles.forumnDateCreated}>
                  Ngày tạo: {forumn.forumnInfo.dateCreated}
                </Row>
                <Row className={styles.forumDetail}>
                  Mô tả: {forumn.forumnInfo.detail}
                </Row>
              </div>
            </Col>
            <Col lg="5" className="align-items-center">
              <div className={styles.postInfo}>
                <Col className="ms-4">
                  <Row className={styles.postTitle}>
                    Post mới nhất: {forumn.newestPost.title}
                  </Row>
                  <Row className={styles.postDateCreated}>
                    Ngày tạo: {forumn.newestPost.dateCreated}
                  </Row>
                  <Row className={styles.postAuthor}>
                    Tác giả: {forumn.newestPost.author}
                  </Row>
                </Col>
              </div>
            </Col>
            <Col lg="2" className="align-items-center">
              <div className={styles.statsInfo}>
                <Row className={styles.numberPeople}>
                  <Col className="d-flex ms-4">
                    <FontAwesomeIcon icon={faUser} className="mt-1"/>
                    <div className="ms-2">{forumn.stats.user}</div>
                  </Col>
                </Row>
                <Row className={styles.numberPosts}>
                  <Col className="d-flex ms-4">
                    <FontAwesomeIcon icon={faPenToSquare} className="mt-1"/>
                    <div className="ms-2">{forumn.stats.post}</div>
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

export default Forumn;
