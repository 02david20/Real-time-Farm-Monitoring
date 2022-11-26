import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import { Container, Col, Row, Button } from "react-bootstrap";
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
  return (
    <div>
      <Row className={styles.topSide}>
        <Col lg="4"></Col>
        <Col lg="4" className={styles.search}>
          <div class="d-flex justify-content-md-center">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success">Search</button>
          </div>
        </Col>
        <Col lg="2" className={styles.add}>
          <Button variant="light" size="lg">
            Create forumn
          </Button>
        </Col>
      </Row>
      <Container className={styles.container}>
        {forumnList.map((forumn) => (
          <Row className={styles.forumn}>
            <Col lg="5" className="align-items-center">
              <div className="ms-2">
                <Row className={styles.forumnTitle}>
                  {forumn.forumnInfo.title}
                </Row>
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
                    <FontAwesomeIcon icon={faUser} />
                    <div className="ms-2">{forumn.stats.user}</div>
                  </Col>
                </Row>
                <Row className={styles.numberPosts}>
                  <Col className="d-flex ms-4">
                    <FontAwesomeIcon icon={faPenToSquare} />
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
