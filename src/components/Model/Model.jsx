/** @format */

import Modal from "@mui/material/Modal";
import "./Model.css";

export default function BasicModal(props) {
  console.log(props.open, "open");
  return (
    <>
      {props.open ? (
        <div>
          <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div className="model_container">
              <div className="model_content">
                <div className="cross_section">
                  <div onClick={props.handleClose} className="cross">
                    &times;
                  </div>
                </div>
                <div>
                  <img src={props.image} alt="image" className="model_image" />
                </div>
                <div className="model_title">{props.title}</div>
                <div className="model_description">{props.content}</div>
                <div className="model_footer">
                  <img
                    src={props.authorImg}
                    className="authoe_image"
                    alt="image"
                  />
                  <div className="author_name">
                    <span>
                      {props.name}-{props.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
