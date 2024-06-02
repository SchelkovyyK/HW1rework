import Modal from "../Modal/Modal";
import ModalBody from "../ModalBody/ModalBody";
import ModalFooter from "../ModalFooter/ModalFooter";
import ModalHeader from "../ModalHeader/ModalHeader";
import Button from "../../buttons/buttons";
import { useState } from "react";
const ModalImage = ({
  children,
  firstText,
  secondaryText,
}) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Button
        type="button"
        classNames="primary-button"
        onClick={() => setOpenModal(true)}
      >
        Click me
      </Button>
      <Modal open={openModal} closeModal={() => setOpenModal(false)}>
        <ModalBody>
          <ModalHeader>{children}</ModalHeader>

          <ModalFooter firstText={firstText} secondaryText={secondaryText} />
        </ModalBody>
      </Modal>
    </>
  );
};

export default ModalImage;
