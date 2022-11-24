import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import styles from "./login.module.css";
import clsx from "clsx";
function Login() {
  return (
    <div class={clsx("vh-100 d-flex justify-content-center align-items-center",styles.bg)}>
      <div class="col-md-3 me-3">
        <img src={Logo} alt="" />
      </div>
      <div class="col-md-4 ms-3 p-5">
        <h2 class="text-center mb-4 text-light">Login</h2>
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
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <p class="small">
            <a class="text-primary" href="#">
              Forgot password?
            </a>
          </p>
          <div class="d-grid">
            <Link to="/field" style={{width:''}}>
              <button class="btn btn-primary" type="submit">
                Login
              </button>
            </Link>
          </div>
        </form>
        <div class="mt-3">
          <p class="mb-0  text-center text-light">
            Don't have an account?{" "}
            <a href="/signup" class="text-primary fw-bold">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
