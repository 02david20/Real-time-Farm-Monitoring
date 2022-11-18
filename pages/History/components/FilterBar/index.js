import React, { useState } from "react";
import { Button, NavDropdown, Dropdown, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faDownload } from "@fortawesome/free-solid-svg-icons";

import styles from "./filterBar.module.css";

function FilterBar() {
  // mouse hover dropdowm
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-darkblue ">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <Button variant="light" className=" m-3">
            <NavDropdown title="Cánh đồng 1/Khu vực 1" id="field-dropdown">
              <NavDropdown.Item>
                <Dropdown
                  drop="end"
                  show={show1}
                  onMouseLeave={() => setShow1(false)}
                  onMouseOver={() => setShow1(true)}
                >
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    Cánh đồng 1
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>Khu vực 1</Dropdown.Item>
                    <Dropdown.Item>Khu vực 2</Dropdown.Item>
                    <Dropdown.Item>Khu vực 3</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Dropdown
                  drop="end"
                  show={show2}
                  onMouseLeave={() => setShow2(false)}
                  onMouseOver={() => setShow2(true)}
                >
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    Cánh đồng 2
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>Khu vực 1</Dropdown.Item>
                    <Dropdown.Item>Khu vực 2</Dropdown.Item>
                    <Dropdown.Item>Khu vực 3</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </NavDropdown.Item>
            </NavDropdown>
          </Button>

          <Button variant="light" className=" m-3">
            <NavDropdown title="Filter" id="filter-dropdown">
              <NavDropdown.Item>Nhiệt độ</NavDropdown.Item>
              <NavDropdown.Item>Độ ẩm</NavDropdown.Item>
              <NavDropdown.Item>Độ pH</NavDropdown.Item>
            </NavDropdown>
          </Button>

          <div className="datepicker d-flex align-items-center m-3">
            <Form.Control type="date" name="start_date" />
            <span className={styles.dash}>-</span>
            <Form.Control type="date" name="end_date" />
            <Button variant="light" name="submit_date">
              <FontAwesomeIcon icon={faClock} />
            </Button>
          </div>

          <Button variant="light">
            <FontAwesomeIcon icon={faDownload} />
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default FilterBar;
