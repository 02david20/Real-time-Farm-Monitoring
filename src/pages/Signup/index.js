import { Container, Form, Button, Row, Col } from "react-bootstrap";

import Logo from "../../assets/images/Logo.png";
import styles from "./signup.module.css";

function Signup() {
  return (
    <div class="vh-100 d-flex justify-content-center align-items-center">
      <div class="col-md-3 me-3">
        <img src={Logo} alt="" />
      </div>
      <div class="col-md-4 ms-3 p-5">
        <h2 class="text-center mb-4 text-light">Sign Up</h2>
        <form>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">User Name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Re-enter Password</label>
          </div>
          <div class="d-grid">
            <button class="btn btn-primary" type="submit">
              Sign up
            </button>
          </div>
        </form>
        <div class="mt-3">
          <p class="mb-0  text-center text-light">
            Already have an account?{" "}
            <a href="/login" class="text-primary fw-bold">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
