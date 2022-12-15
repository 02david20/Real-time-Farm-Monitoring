import React, { useState } from "react";
import { Button, NavDropdown, Form } from "react-bootstrap";
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import styles from "./filterBar.module.css";
import "react-bootstrap-submenu/dist/index.css";

const fieldLists = [
  {
    name: "Cánh đồng 1",
    sections: ["Khu vực 1", "Khu vực 2", "Khu vực 3"],
  },
  {
    name: "Cánh đồng 2",
    sections: ["Khu vực 1", "Khu vực 2"],
  },
  {
    name: "Cánh đồng 3",
    sections: ["Khu vực 1", "Khu vực 2", "Khu vực 3", "Khu vực 4"],
  },
];

function FilterBar() {
  const [field, setField] = useState("Chọn cánh đồng/khu vực");
  function handleField(fieldName, sectionName) {
    setField(fieldName + "/" + sectionName);
  }

  const [filter, setFilter] = useState("Filter");
  function handleFilter(filterValue) {
    setFilter(filterValue);
  }

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-darkblue">
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
          <Button variant="light" className="m-3">
            <NavDropdownMenu title={field} id="collasible-nav-dropdown">
              {fieldLists.map((fieldList) => (
                <DropdownSubmenu
                  title={fieldList.name}
                  alignRight="true"
                  key={fieldList.name}
                >
                  {fieldList.sections.map((section) => (
                    <NavDropdown.Item
                      id="selector"
                      onClick={() => handleField(fieldList.name, section)}
                      key={section}
                    >
                      {section}
                    </NavDropdown.Item>
                  ))}
                </DropdownSubmenu>
              ))}
            </NavDropdownMenu>
          </Button>

          <Button variant="light" className=" m-3">
            <NavDropdown title={filter} id="filter-dropdown">
              <NavDropdown.Item onClick={() => handleFilter("Nhiệt độ")}>
                Nhiệt độ
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleFilter("Độ ẩm")}>
                Độ ẩm
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleFilter("Độ pH")}>
                Độ pH
              </NavDropdown.Item>
            </NavDropdown>
          </Button>

          <div className="datepicker d-flex align-items-center m-3">
            <Form.Control type="date" name="start_date" class="btn" />
            <span className={styles.dash}>-</span>
            <Form.Control type="date" name="end_date" class="btn" />
          </div>

          <Button variant="light" href="/download">
            <FontAwesomeIcon icon={faDownload} />
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default FilterBar;
