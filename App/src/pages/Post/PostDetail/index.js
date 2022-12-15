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
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ante tellus. Morbi blandit sollicitudin mi, dapibus porttitor sapien pharetra a. Cras mollis at nibh sit amet congue. Mauris ipsum dolor, tristique non congue ut, consequat ut felis. Ut at interdum sem, at tincidunt diam. Maecenas placerat, felis in consequat accumsan, leo nibh euismod diam, ac aliquam mauris sem eu nulla. Pellentesque dapibus imperdiet ultrices. Suspendisse eu turpis nisl. Quisque eu libero rhoncus, finibus ipsum ac, lobortis dui. Ut tristique ipsum nisl, ornare rhoncus nisi sagittis sit amet. Donec ac diam et mi ultrices porta id vitae est.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a porta dui. Aliquam erat volutpat. Ut porttitor convallis gravida. Suspendisse consectetur ipsum id enim consequat volutpat. Proin nibh dolor, pellentesque cursus vulputate ut, posuere ut nisi. Suspendisse blandit tortor et placerat lacinia. Curabitur metus eros, vulputate et elit at, mollis euismod eros. Nulla in egestas felis. Nunc sed eros eget velit mollis viverra sit amet id dolor. Etiam lacinia ut dolor non auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur tincidunt lorem ut pharetra euismod.Praesent vel mauris et neque facilisis molestie eget sit amet dui. Praesent nec arcu eget enim sollicitudin faucibus. Aliquam ut purus elit. Aenean ut neque purus. Aenean et fermentum justo. Cras mollis turpis non velit pulvinar, sed pulvinar elit lacinia. Sed vestibulum lorem quam, id egestas nunc blandit quis. Praesent non sagittis nulla. Curabitur in leo sem. Vestibulum et ex eget erat pellentesque bibendum vel ac ipsum. Quisque enim eros, tincidunt sed tincidunt at, pretium quis mi. Sed eu ligula metus. Integer interdum tortor quam, quis mattis orci suscipit eget. Vivamus luctus ex odio, ac sollicitudin sem euismod sed. Donec a leo sem. Vestibulum gravida ex in turpis ullamcorper, vitae pharetra ligula malesuada. Praesent posuere sapien eu mi venenatis, vel malesuada nibh volutpat. Aenean laoreet ipsum sit amet nisi suscipit, at volutpat nunc mattis. Ut rhoncus semper condimentum. Phasellus massa dui, vestibulum at consectetur in, posuere nec risus. Etiam ultrices rhoncus venenatis. Vestibulum sit amet justo eget lectus sollicitudin facilisis vitae et sem. Aenean malesuada mollis mi eu fermentum. Phasellus ut luctus augue. Ut lacinia lectus nisi, ac blandit massa porta a. Nullam imperdiet, neque nec eleifend mattis, mi odio luctus tortor, eget congue libero ante ac nulla. Donec sit amet dolor eu tortor auctor aliquet non eu enim. Maecenas leo leo, finibus sed sagittis auctor, efficitur quis massa. Nulla facilisi. Vestibulum lacinia massa nunc, vitae dignissim nulla feugiat et. Sed sit amet elit eget nulla ullamcorper accumsan. Vivamus aliquet augue sed ex sollicitudin pretium. Pellentesque mattis arcu dapibus magna ornare, at tristique erat malesuada. Aenean lobortis mauris at purus sagittis, sit amet laoreet diam placerat.nec congue imperdiet orci at hendrerit. Sed feugiat aliquam metus, nec porttitor magna tincidunt a. In in erat ac est sagittis sodales at ac tellus. Duis aliquam aliquam turpis, vel porttitor leo molestie fermentum. Cras diam sem, semper vitae ultricies a, hendrerit at massa. Proin et leo in mauris interdum lobortis tincidunt non erat. Cras laoreet sed nunc ut sollicitudin. Integer cursus metus velit, sed congue lacus congue id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur quis eros elit.Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus pretium dolor facilisis tellus vulputate porta. Aenean placerat orci vitae odio pellentesque dictum. Ut porttitor ante at metus luctus, vitae imperdiet enim semper. Donec et dignissim odio. Integer viverra dolor ac vulputate efficitur. Fusce velit nibh, posuere cursus ex quis, ullamcorper suscipit leo. Phasellus tempor nisi a nibh semper, at lacinia libero finibus. Vivamus facilisis id tellus a egestas. Fusce pellentesque nec neque eu maximus. Aliquam vitae leo efficitur, iaculis ante non, auctor odio. Praesent nec sapien hendrerit, vulputate ipsum vel, sollicitudin quam. Cras sit amet nulla ante. Quisque vel erat id urna dictum varius non pretium quam.Nunc in efficitur ipsum. Donec viverra diam vitae massa gravida laoreet. Nunc rutrum, odio et mollis facilisis, augue sapien pretium arcu, at semper urna eros a massa. Fusce elementum nibh et tempus finibus. In fermentum, leo ut interdum gravida, orci lorem luctus ex, ut pulvinar urna lectus eu orci. Curabitur nibh metus, feugiat ac diam eu, commodo venenatis nisi. Integer convallis diam dolor, et euismod sapien pellentesque vel. Nullam non erat quis dui egestas mattis non sit amet libero.Sed orci sapien, venenatis sed erat ac, luctus facilisis odio. Phasellus ex diam, feugiat at lorem non, placerat fermentum eros. Curabitur eu turpis diam. Maecenas accumsan vehicula egestas. Vestibulum tempor id elit at cursus. Phasellus cursus erat vitae massa fringilla, eget dictum nibh malesuada. Nulla sollicitudin velit eu elit vulputate, vitae tincidunt libero ultrices. Etiam malesuada, ex non mollis bibendum, urna diam convallis mi, et molestie lorem enim non turpis. Donec at urna feugiat, venenatis felis eget, lacinia neque. Integer ut turpis ut sem porttitor accumsan. Vestibulum non tempor tortor.In luctus dolor nisi. Maecenas lobortis, sapien in egestas tincidunt, augue libero pulvinar elit, ut aliquet ante lacus non felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In fermentum ipsum et dolor mattis congue quis vel neque. Vestibulum maximus eros mauris, ac commodo mauris tempus vitae. Praesent dictum nisi ut sapien lobortis accumsan. Suspendisse turpis felis, interdum sed iaculis vel, pharetra non neque. Sed fermentum ante sed faucibus pretium. Pellentesque eget leo felis. Maecenas hendrerit ex arcu. Pellentesque tempor, sem at placerat rhoncus, est elit molestie diam, eget pharetra quam neque eu ligula. Duis efficitur lectus eget arcu malesuada, ut ultrices est scelerisque. Nulla maximus, odio sed varius hendrerit, risus ligula luctus libero, ac pellentesque metus nibh id risus. Quisque id blandit massa. Fusce volutpat tincidunt elit.Aliquam erat volutpat. Nullam blandit fermentum ultrices. In molestie nisi eget sapien vestibulum euismod. Vestibulum leo sapien, volutpat pulvinar nisi non, molestie viverra orci. Aliquam nec vulputate massa. Fusce porta consectetur commodo. Suspendisse efficitur, lectus a dapibus euismod, tortor ante aliquam quam, sit amet bibendum nunc libero nec sem. Mauris rutrum mauris nec ipsum tempus, quis egestas nisl mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis vel massa eu nisl euismod congue posuere non dolor. Donec ligula lacus, fermentum ut nibh at, fringilla venenatis lacus.",
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
