import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import { Container, Col, Row, Button, Form, Modal, Dropdown } from "react-bootstrap";
import { useState } from "react";
import { useForm } from 'react-hook-form'
import styles from "./forumn.module.css";

const forumns = [];
for (let i = 0; i < 5; i++) {
  forumns.push({
    id: i+1,
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
  const { register, getValues, setValue } = useForm();
  const [forumnList, updateForumnList] = useState(forumns);
  const [newestID, setNewestID] = useState(forumns.length+1);
  // Create forumn
  const [showCreate, setShowCreate] = useState(false);
  const handleCloseCreate = () => setShowCreate(false);
  const handleShowCreate = () => {
    setValue("title", "")
    setValue("detail", "")
    setShowCreate(true);
  }
  // Edit forumn
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit= () => setShowEdit(false);
  const handleShowEdit = (e) => {
    setShowEdit(true);
    let id = e.target.getAttribute("id"),
        title = e.target.getAttribute("title"),
        detail = e.target.getAttribute("detail")
    setValue("title", title)
    setValue("detail", detail)
    setIdOfEditedForumn(id)
  }
  const [idOfEditedForumn, setIdOfEditedForumn] = useState()
  // Logic to handle add, edit and remove forumn
  const handleAddForumn = () => {
    setNewestID((newestID) => newestID+1)
    const d = new Date()
    let newForumn = {
      id: newestID,
      forumnInfo: {
        title: getValues("title"),
        host: "Danh Nguyen",
        dateCreated: "".concat(d.getDate(), "-", d.getMonth(), "-", d.getFullYear()),
        detail: getValues("detail")
      },
      newestPost: {
        title: "",
        dateCreated: "",
        author: ""
      },
      stats: {
        user: 0,
        post: 0
      }
    }
    let newForumnList = forumnList.concat(newForumn)
    updateForumnList(newForumnList)
    setShowCreate(false);
  }
  const handleEditForumn = () => {
    const newForumnList = forumnList.map((forumn) => {
      if (forumn.id == idOfEditedForumn) {
        const updatedForumn = forumn
        updatedForumn.forumnInfo.title = getValues().title
        updatedForumn.forumnInfo.detail = getValues().detail
        return updatedForumn
      }
      return forumn
    })
    updateForumnList(newForumnList)
    setShowEdit(false);
  }
  const handleDeleteForumn = (e) => {
    let id = e.target.getAttribute("id")
    updateForumnList(forumnList.filter(forumn => forumn.id != id))
  }

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
          <Button variant="light" size="lg" onClick={handleShowCreate}>
            Create forumn
          </Button>
          
          <Modal show={showCreate} onHide={handleCloseCreate} size="lg">
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
                    {...register("title")}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Mô tả</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={6} 
                    {...register("detail")}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseCreate}>
                Hủy
              </Button>
              <Button variant="primary" onClick={handleAddForumn}>
                Tạo diễn đàn
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={showEdit} onHide={handleCloseEdit} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Chỉnh sửa thông tin diễn đàn</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Tên diễn đàn</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    {...register("title")}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Mô tả</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={6} 
                    {...register("detail")}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseEdit}>
                Hủy
              </Button>
              <Button variant="primary" onClick={handleEditForumn}>
                Cập nhật
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
            <Col lg="4" className="align-items-center">
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
            <Col lg="1">
              <Dropdown className="ms-1">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item 
                    id={forumn.id} 
                    title={forumn.forumnInfo.title}
                    detail={forumn.forumnInfo.detail}
                    onClick={handleShowEdit}
                  >Chỉnh sửa</Dropdown.Item>
                  <Dropdown.Item 
                    id={forumn.id}
                    onClick={handleDeleteForumn}
                  >Xóa</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
}

export default Forumn;
