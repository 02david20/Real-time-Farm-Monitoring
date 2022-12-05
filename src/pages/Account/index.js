import { Container, Col, Row, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useForm } from 'react-hook-form'
import styles from "./account.module.css";
import logo from "../../assets/images/Logo.png";

const accountInfo = {
  username: "harrymaguire_05",
  fullname: "Harry Maguire",
  id: "0123456789",
  address: "Old Trafford Stadium",
  email: "farmers@gmail.com",
  phone: "0123456789",
  bdate: "1993-03-05",
  gender: "Male",
  password: "farmers"
};

function Account() {
  const [sectionChoose, setSectionChoose] = useState(1);

  return (
    <div className={styles.main}>
      <Container className={styles.container}>
        <Row>
          <Col lg="3">
            <Row className={styles.section} id={sectionChoose === 1 ? styles.yes : styles.no}>Thông tin tài khoản</Row>
            <Row className={styles.section} id={sectionChoose === 2 ? styles.yes : styles.no}>Cập nhật thông tin</Row>
            <Row className={styles.section} id={sectionChoose === 3 ? styles.yes : styles.no}>Cập nhật avatar</Row>
            <Row className={styles.section} id={sectionChoose === 4 ? styles.yes : styles.no}>Thay đổi mật khẩu</Row>
            <Row className={styles.section} id={sectionChoose === 5 ? styles.yes : styles.no}>Xác thực email</Row>
          </Col>
          <Col lg="9" className={styles.info} id={sectionChoose === 1 ? styles.ok : styles.nah}>
            <Row className={styles.lineInfo}>
              <Col lg="4"><Row>Tên đăng nhập</Row></Col>
              <Col lg="8"><Row>{accountInfo.username}</Row></Col>
            </Row>
            <Row className={styles.lineInfo}>
              <Col lg="4"><Row>Họ và tên</Row></Col>
              <Col lg="8"><Row>{accountInfo.fullname}</Row></Col>
            </Row>
            <Row className={styles.lineInfo}>
              <Col lg="4"><Row>CMND/Passport</Row></Col>
              <Col lg="8"><Row>{accountInfo.id}</Row></Col>
            </Row>
            <Row className={styles.lineInfo}>
              <Col lg="4"><Row>Email</Row></Col>
              <Col lg="8"><Row>{accountInfo.email}</Row></Col>
            </Row>
            <Row className={styles.lineInfo}>
              <Col lg="4"><Row>Địa chỉ</Row></Col>
              <Col lg="8"><Row>{accountInfo.address}</Row></Col>
            </Row>
            <Row className={styles.lineInfo}>
              <Col lg="4"><Row>Điện thoại</Row></Col>
              <Col lg="8"><Row>{accountInfo.phone}</Row></Col>
            </Row>
            <Row className={styles.lineInfo}>
              <Col lg="4"><Row>Ngày sinh</Row></Col>
              <Col lg="8"><Row>{accountInfo.bdate}</Row></Col>
            </Row>
          </Col>
          <Col lg="9" className={styles.info} id={sectionChoose === 2 ? styles.ok : styles.nah}>
            <Row className={styles.lineInfo}>
              <Col lg="4"><Row>Họ và tên</Row></Col>
              <Col lg="8"><Row>{accountInfo.fullname}</Row></Col>
            </Row>
            <Row className={styles.lineInfo}>
              <Col lg="4"><Row>Email</Row></Col>
              <Col lg="8"><Row>{accountInfo.email}</Row></Col>
            </Row>
            <Row className={styles.lineInfo}>
              <Col lg="4"><Row>CMND/Passport</Row></Col>
              <Col lg="8"><Row>
                <input type="text" class="form-control" placeholder="Nhập CMND/Passport"/>
              </Row></Col>
            </Row>
            <Row className={styles.lineInfo}>
              <Col lg="4"><Row>Địa chỉ</Row></Col>
              <Col lg="8"><Row>
                <input type="text" class="form-control" placeholder="Nhập địa chỉ"/>
              </Row></Col>
            </Row>
            <Row className={styles.lineInfo}>
              <Col lg="4"><Row>Điện thoại</Row></Col>
              <Col lg="8"><Row>
                <input type="tel" class="form-control" placeholder="Nhập số điện thoại" pattern="0[0-9]{9}"/>
              </Row></Col>
            </Row>
            <Row className={styles.lineInfo}>
              <Col lg="4"><Row>Giới tính</Row></Col>
              <Col lg="8"><Row>
                <form class="d-flex">
                  <div class="form-check px-4">
                    <input class="form-check-input" type="radio" name="gender" id="male" checked/>
                    <label class="form-check-label" for="male">Nam</label>
                  </div>
                  <div class="form-check px-4">
                    <input class="form-check-input" type="radio" name="gender" id="female"/>
                    <label class="form-check-label" for="female">Nữ</label>
                  </div>
                  <div class="form-check px-4">
                    <input class="form-check-input" type="radio" name="gender" id="others"/>
                    <label class="form-check-label" for="others">Khác</label>
                  </div>
                </form>
              </Row></Col>
            </Row>
            <Row className={styles.lineInfo}>
              <Col lg="4"><Row>Ngày sinh</Row></Col>
              <Col lg="8"><Row>
                <input type="date" name="bdate" value={accountInfo.bdate}/>
              </Row></Col>
            </Row>
            <Row className="mt-4">
              <Col lg="4"></Col>
              <Col lg="2">
                <Button variant="success" size="lg">
                  Thay đổi
                </Button>
              </Col>
            </Row>
          </Col>
          <Col lg="9" className={styles.info} id={sectionChoose === 3 ? styles.ok : styles.nah}>
            <Row className={styles.lineInfo}>
              <Col lg="4"><Row>Tên đăng nhập</Row></Col>
              <Col lg="8"><Row>{accountInfo.username}</Row></Col>
            </Row>
            <Row className={styles.lineInfo}>
              <Col lg="4"><Row>Avatar hiện tại</Row></Col>
              <Col lg="8"><Row><img src={logo} alt="" style={{ width: "60%" }} /></Row></Col>
            </Row>
            <Row className="mt-4">
              <Col lg="4"></Col>
              <Col lg="2">
                <Button variant="success" size="lg">
                  Thay đổi
                </Button>
              </Col>
            </Row>
          </Col>
          <Col lg="9" className={styles.info} id={sectionChoose === 4 ? styles.ok : styles.nah}>
            <Row className={styles.lineInfo}>
              <Col lg="4"><Row>Tên đăng nhập</Row></Col>
              <Col lg="8"><Row>{accountInfo.username}</Row></Col>
            </Row>
            <Row className={styles.lineInfo}>
              <Col lg="4"><Row>Mật khẩu hiện tại</Row></Col>
              <Col lg="8"><Row>
                <input type="password" class="form-control" placeholder="Nhập mật khẩu hiện tại"/>
              </Row></Col>
            </Row>
            <Row className={styles.lineInfo}>
              <Col lg="4"><Row>Mật khẩu mới</Row></Col>
              <Col lg="8"><Row>
                <input type="password" class="form-control" placeholder="Nhập mật khẩu mới"/>
              </Row></Col>
            </Row>
            <Row className={styles.lineInfo}>
              <Col lg="4"><Row>Xác nhận mật khẩu</Row></Col>
              <Col lg="8"><Row>
                <input type="password" class="form-control" placeholder="Nhập lại mật khẩu mới"/>
              </Row></Col>
            </Row>
            <Row className="mt-4">
              <Col lg="4"></Col>
              <Col lg="2">
                <Button variant="success" size="lg">
                  Thay đổi
                </Button>
              </Col>
            </Row>
          </Col>
          <Col lg="9" className={styles.info} id={sectionChoose === 5 ? styles.ok : styles.nah}>
            <Row className={styles.lineInfo}>
              <Col lg="4"><Row>Tên đăng nhập</Row></Col>
              <Col lg="8"><Row>{accountInfo.username}</Row></Col>
            </Row>
            <Row className={styles.lineInfo}>
              <Col lg="4"><Row>Email</Row></Col>
              <Col lg="8"><Row>{accountInfo.email}</Row></Col>
            </Row>
            <Row className="mt-4">
              <Col lg="4"></Col>
              <Col lg="3">
                <Button variant="success" size="lg">
                  Gửi mail xác thực
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Account;
