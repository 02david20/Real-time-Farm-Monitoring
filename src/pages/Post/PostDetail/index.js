import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
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
  function handleClick() {
    setToggle(!toggle);
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
    </div>
  );
}

export default PostDetail;
