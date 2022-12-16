/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { Link } from "react-router-dom";
import { UserFields } from "../../api/api";
import fieldImg from "../../assets/images/field1.png"
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
function Fields() {
    const [fields, setFields] = useState(UserFields)
    const ImgHandle = async (img) => {
        return fieldImg
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="row row-cols-2 row-cols-sm-3 p-2">
                {
                    fields.map((field, index) => {
                        return (
                            <div key={index} className="col">
                                <Link to={{ pathname: "/field/" + field.id }}
                                    state={{
                                        coordinate: field.coordinate,
                                        name: field.name,
                                    }}
                                >
                                    <img src={field.img} className="img-fluid" style={{ maxHeight: '100%' }} />
                                </Link>
                                <h2>Field: {field.name}</h2>
                            </div>
                        )
                    })
                }
            </div>

            <Button variant="success" onClick={handleShow}
                style={{
                    position:"fixed",
                    bottom:"5%",
                    width:"200px",
                    height:"60px",

                }}
            >
                Thêm Khu Vườn
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm vào 1 khu vườn mới</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Tên của khu vườn</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Tên khu vườn..."
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Tọa độ khu vườn</Form.Label>
                            <Row>  
                                <Col>
                                    <Form.Control
                                        className="col"
                                        type="number"
                                        placeholder="Longtitude..."
                                    />
                                </Col>
                                
                                <Col>
                                    <Form.Control
                                        className="col"
                                        type="number"
                                        placeholder="Latitude..."
                                    />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Mô tả</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Hủy
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </Modal>

        </>

    )
}

export default (Fields)