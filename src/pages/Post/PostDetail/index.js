import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faHeart as heart } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./postDetail.module.css";

const post = {
  title: "Post title is here",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ante tellus. Morbi blandit sollicitudin mi, dapibus porttitor sapien pharetra a. Cras mollis at nibh sit amet congue. Mauris ipsum dolor, tristique non congue ut, consequat ut felis. Ut at interdum sem, at tincidunt diam. Maecenas placerat, felis in consequat accumsan, leo nibh euismod diam, ac aliquam mauris sem eu nulla. Pellentesque dapibus imperdiet ultrices. Suspendisse eu turpis nisl. Quisque eu libero rhoncus, finibus ipsum ac, lobortis dui. Ut tristique ipsum nisl, ornare rhoncus nisi sagittis sit amet. Donec ac diam et mi ultrices porta id vitae est.",
};

function PostDetail() {
  const [toggle, setToggle] = useState(false);
  const [comments, setComments] = useState([
    {
      name: "User A",
      time: "2/11/2022 15:25:43",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "User B",
      time: "21/11/2022 10:12:43",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "User C",
      time: "26/11/2022 22:51:43",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ]);

  function handleClick() {
    setToggle(!toggle);
  }

  function upCmt() {
    let content = document.getElementById("comment_text").value;
    console.log(content);
    const dt = new Date();
    const padL = (nr, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);

    let time = `${padL(dt.getMonth() + 1)}/${padL(
      dt.getDate()
    )}/${dt.getFullYear()} ${padL(dt.getHours())}:${padL(
      dt.getMinutes()
    )}:${padL(dt.getSeconds())}`;

    let newCmt = comments.unshift({
      name: "User",
      time: time,
      content: content,
    });

    setComments((comments) => [...comments, newCmt]);
  }

  return (
    <div className={styles.container}>
      <Row className="pt-3">
        <Container className={styles.post}>
          <h1>{post.title}</h1>
          {post.content}
        </Container>
      </Row>
      <Row className="pt-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic example"
          style={{ width: "100px" }}
        >
          <button
            type="button"
            className="btn btn-light"
            onClick={function (e) {
              handleClick();
            }}
          >
            {toggle && (
              <FontAwesomeIcon
                icon={heart}
                style={{ color: "red" }}
              ></FontAwesomeIcon>
            )}
            {!toggle && <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>}
          </button>
          <button type="button" className="btn btn-light">
            <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
          </button>
          <button type="button" className="btn btn-light">
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </button>
          <button type="button" className="btn btn-light">
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </button>
        </div>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col md="12" lg="10" xl="8">
          <div className="card">
            <div
              className="card-header py-3 border-0"
              style={{ backgroundColor: "#f8f9fa" }}
            >
              <div className="d-flex flex-start w-100">
                <div className="form-outline w-100">
                  <textarea
                    className="form-control"
                    id="comment_text"
                    rows="4"
                    style={{ background: "#fff", resize: "none" }}
                    placeholder="Bình luận mới"
                  ></textarea>
                </div>
              </div>
              <div className="float-end mt-2 pt-1">
                <button
                  form="cmt"
                  className="btn-orange btn btn-primary btn-sm"
                  value="commentin"
                  onClick={function (e) {
                    upCmt();
                  }}
                >
                  Đăng
                </button>
                <input
                  type="reset"
                  className="btn-orange-out btn btn-outline-primary btn-sm ms-3"
                  value="Hủy"
                ></input>
              </div>
            </div>

            {comments.map((comment) => (
              <div
                className="card-body"
                key={comment.name}
                style={{ borderBottom: "1px solid grey" }}
              >
                <div className="d-flex flex-start align-items-center">
                  <div>
                    <h6 className="fw-bold text-primary mb-1">
                      {comment.name}
                    </h6>
                    <p className="text-muted small mb-0">{comment.time}</p>
                  </div>
                </div>
                <p className="mt-3 mb-4 pb-2">{comment.content}</p>
                <div className="small d-flex justify-content-start">
                  <a className="d-flex align-items-center me-3">
                    <i className="far fa-thumbs-up me-2"></i>
                    <p className="mb-0">Thích</p>
                  </a>
                  <a className="d-flex align-items-center me-3">
                    <i className="far fa-comment-dots me-2"></i>
                    <p className="mb-0">Bình luận</p>
                  </a>
                  <a href="" className="d-flex align-items-center me-3">
                    <i className="fas fa-share me-2"></i>
                    <p className="mb-0">Chia sẻ</p>
                  </a>
                  <a href="" className="d-flex align-items-center me-3">
                    <i className="fas fa-exclamation-triangle me-2"></i>
                    <p className="mb-0">Xóa</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default PostDetail;
