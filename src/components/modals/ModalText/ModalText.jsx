import Modal from "../Modal/Modal";
import ModalBody from "../ModalBody/ModalBody";
import ModalFooter from "../ModalFooter/ModalFooter";
import ModalHeader from "../ModalHeader/ModalHeader";
import Button from "../../buttons/buttons";
import { useState } from "react";
const ModalText = ({ children, firstText }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button type="button" classNames="primary-button" onClick={setOpenModal}>
        Click me
      </Button>
      <Modal open={openModal} closeModal={() => setOpenModal(false)}>
        <ModalBody>
          <ModalHeader>{children}</ModalHeader>

          <ModalFooter firstText={firstText} />
        </ModalBody>
      </Modal>
    </>
  );
};

export default ModalText;
