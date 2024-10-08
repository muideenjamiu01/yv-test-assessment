import React from "react";
import { Modal } from "antd";

const SeeNewModal = ({visible, onClose,}) => {
  return (
    <Modal
      
      open={visible}
      onCancel={() => onClose(null)}
      footer={null}
      width={600}
      style={{ borderRadius: "20px" }}
    >
       <div className="mt-10 flex justify-center">
       <p className="tracking-wide text-primary text-5xl font-medium animate-bounce">
              COMING SOON
            </p>
       </div>
    </Modal>
  )
}

export default SeeNewModal