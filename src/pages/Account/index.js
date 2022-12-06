import { Container, Col, Row, Button } from "react-bootstrap";
import { useState } from "react";
import { useForm } from 'react-hook-form'
import styles from "./account.module.css";
import logo from "../../assets/images/Logo.png";

const data = {
  username: "harrymaguire_05",
  fullname: "Harry Maguire",
  id: "0123456789",
  address: "Old Trafford Stadium",
  email: "farmers@gmail.com",
  phone: "0123456789",
  bdate: "1993-03-05",
  gender: "male",
  password: "farmers"
};

function Account() {
  const { register, getValues, setValue, reset } = useForm();
  const [sectionChoose, setSectionChoose] = useState(1);
  const [accountInfo, setAccountInfo] = useState(data);

  setValue("id", accountInfo.id);
  setValue("address", accountInfo.address);
  setValue("phone", accountInfo.phone);
  setValue("gender", accountInfo.gender);
  setValue("bdate", accountInfo.bdate);

  const handleSectionTwo = () => {
    const newAccountInfo = accountInfo;
    newAccountInfo.id = getValues().id;
    newAccountInfo.address = getValues().address;
    newAccountInfo.phone = getValues().phone;
    newAccountInfo.gender = getValues().gender;
    newAccountInfo.bdate = getValues().bdate;
    setAccountInfo(newAccountInfo);
    alert("Đã cập nhật thành công");
  }

  const handleSectionThree = () => {
    alert("Cập nhật avatar thành công");
  }

  const handleSectionFour = () => {
    if (getValues().password == "" || getValues().new_password == "" || getValues().retype_password == "") {
      alert("Vui lòng nhập đầy đủ thông tin");
    }
    else if (getValues().password != data.password) {
      alert("Vui lòng nhập đúng mật khẩu ban đầu");
    }
    else if (getValues().new_password != getValues().retype_password) {
      alert("Mật khẩu nhập lại không trùng khớp với mật khẩu mới");
    }
    else if (getValues().password == getValues().new_password) {
      alert("Mật khẩu mới phải khác với mật khẩu ban đầu");
    }
    else {
      const newAccountInfo = accountInfo;
      newAccountInfo.password = getValues().new_password;
      setAccountInfo(newAccountInfo);
      alert("Đổi mật khẩu thành công");
    }
    reset({
      password: "", new_password: "", retype_password: ""
    })
  }

  const handleSectionFive = () => {
    alert("Đã gửi mail xác thực. Hãy kiểm tra hộp thư của bạn");
  }

  return (
    <div className={styles.main}>
      <Container className={styles.container}>
        <Row>
          <Col lg="3">
            <Row 
              className={styles.section} 
              id={sectionChoose === 1 ? styles.yes : styles.no} 
              onClick={() => setSectionChoose(1)}
            >Thông tin tài khoản</Row>
            <Row 
              className={styles.section} 
              id={sectionChoose === 2 ? styles.yes : styles.no} 
              onClick={() => setSectionChoose(2)}
            >Cập nhật thông tin</Row>
            <Row 
              className={styles.section} 
              id={sectionChoose === 3 ? styles.yes : styles.no} 
              onClick={() => setSectionChoose(3)}
            >Cập nhật avatar</Row>
            <Row 
              className={styles.section} 
              id={sectionChoose === 4 ? styles.yes : styles.no} 
              onClick={() => setSectionChoose(4)}
            >Thay đổi mật khẩu</Row>
            <Row 
              className={styles.section} 
              id={sectionChoose === 5 ? styles.yes : styles.no} 
              onClick={() => setSectionChoose(5)}
            >Xác thực email</Row>
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
                <input type="text" class="form-control" placeholder="Nhập CMND/Passport" {...register("id")}/>
              </Row></Col>
            </Row>
            <Row className={styles.lineInfo}>
              <Col lg="4"><Row>Địa chỉ</Row></Col>
              <Col lg="8"><Row>
                <input type="text" class="form-control" placeholder="Nhập địa chỉ" {...register("address")}/>
              </Row></Col>
            </Row>
            <Row className={styles.lineInfo}>
              <Col lg="4"><Row>Điện thoại</Row></Col>
              <Col lg="8"><Row>
                <input type="tel" class="form-control" placeholder="Nhập số điện thoại" {...register("phone")}/>
              </Row></Col>
            </Row>
            <Row className={styles.lineInfo}>
              <Col lg="4"><Row>Giới tính</Row></Col>
              <Col lg="8"><Row>
                <form class="d-flex">
                  <div class="form-check px-4">
                    <input class="form-check-input" {...register("gender")} type="radio" name="gender" value="male" id="male"/>
                    <label class="form-check-label" for="male">Nam</label>
                  </div>
                  <div class="form-check px-4">
                    <input class="form-check-input" {...register("gender")} type="radio" name="gender" value="female" id="female"/>
                    <label class="form-check-label" for="female">Nữ</label>
                  </div>
                  <div class="form-check px-4">
                    <input class="form-check-input" {...register("gender")} type="radio" name="gender" value="others" id="others"/>
                    <label class="form-check-label" for="others">Khác</label>
                  </div>
                </form>
              </Row></Col>
            </Row>
            <Row className={styles.lineInfo}>
              <Col lg="4"><Row>Ngày sinh</Row></Col>
              <Col lg="8"><Row>
                <input type="date" name="bdate" {...register("bdate")}/>
              </Row></Col>
            </Row>
            <Row className="my-4">
              <Col lg="4"></Col>
              <Col lg="2">
                <Button variant="success" size="lg" onClick={handleSectionTwo}>
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
            <Row className="my-4">
              <Col lg="4"></Col>
              <Col lg="2">
                <Button variant="success" size="lg" onClick={handleSectionThree}>
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
                <input type="password" {...register("password")} class="form-control" placeholder="Nhập mật khẩu hiện tại"/>
              </Row></Col>
            </Row>
            <Row className={styles.lineInfo}>
              <Col lg="4"><Row>Mật khẩu mới</Row></Col>
              <Col lg="8"><Row>
                <input type="password" {...register("new_password")} class="form-control" placeholder="Nhập mật khẩu mới"/>
              </Row></Col>
            </Row>
            <Row className={styles.lineInfo}>
              <Col lg="4"><Row>Xác nhận mật khẩu</Row></Col>
              <Col lg="8"><Row>
                <input type="password" {...register("retype_password")} class="form-control" placeholder="Nhập lại mật khẩu mới"/>
              </Row></Col>
            </Row>
            <Row className="my-4">
              <Col lg="4"></Col>
              <Col lg="2">
                <Button variant="success" size="lg" onClick={handleSectionFour}>
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
            <Row className="my-4">
              <Col lg="4"></Col>
              <Col lg="3">
                <Button variant="success" size="lg" onClick={handleSectionFive}>
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
