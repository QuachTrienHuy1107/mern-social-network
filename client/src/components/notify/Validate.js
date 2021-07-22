import { Toast } from "react-bootstrap";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Validate = (message) => {
    const { notify } = useSelector((state) => state);
    const [show, setShow] = useState(true);

    const toggleShow = () => setShow(!show);
    return (
        <Toast
            className="position-fixed top-0 end-0 bg-primary"
            onClose={() => toggleShow()}
            show={show}
            delay={3000}
            autohide
        >
            <Toast.Header closeButton>
                <strong className="me-auto">Notification</strong>
            </Toast.Header>
            <Toast.Body className="text-light" style={{ fontSize: 16 }}>
                {notify.error}
            </Toast.Body>
        </Toast>
    );
};
export default Validate;
