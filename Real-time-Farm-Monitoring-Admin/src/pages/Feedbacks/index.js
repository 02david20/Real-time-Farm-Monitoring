import DataTable from "react-data-table-component";
import { useState } from "react";
import { feedbacksData } from "./feedbacks-data";
import Modal from "react-bootstrap/Modal";
import "./Feedbacks.scss";

function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState(feedbacksData);
  const [show, setShow] = useState(false);
  const [row, setRow] = useState(feedbacks[0]);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  const handleRowClicked = (row, event) => {
    handleOpen();
    setRow(row);
    if (!row.seen) {
      row.seen = true;
      setFeedbacks([...feedbacks]);
    }
  };
  const columns = [
    {
      name: "Người Gửi",
      selector: (row) => row.senderName,
    },
    {
      name: "Tiêu Đề",
      selector: (row) => row.title,
    },
    {
      name: "Ngày Gửi",
      selector: (row) => row.sendDate,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
  ];
  const conditionalRowStyles = [
    {
      when: (row) => row.seen,
      style: {
        backgroundColor: "#EDF5E1",
      },
    },
  ];
  const customStyles = {
    table: {
      style: {
        height: "500px",
      },
    },
  };
  return (
    <div className="container">
      <DataTable
        title={"GÓP Ý"}
        columns={columns}
        data={feedbacks}
        pagination
        highlightOnHover
        pointerOnHover
        persistTableHead
        onRowClicked={handleRowClicked}
        customStyles={customStyles}
        conditionalRowStyles={conditionalRowStyles}
      />
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>{row.title}</Modal.Title>
          <div id="nameAndDate">
            <p id="senderName">Người góp ý: {row.senderName}</p>
            <p id="sendDate">Ngày gửi: {row.sendDate}</p>
          </div>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet consectetur.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          numquam. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Consequuntur, repudiandae! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fuga, ipsum!
          <br />
          Lorem ipsum dolor sit.
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Feedbacks;
