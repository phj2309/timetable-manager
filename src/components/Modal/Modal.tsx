import React from "react";
import { ModalOverlay, ModalContent, ButtonGroup, Button } from "./Modal.style";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <div>{children}</div>
        <ButtonGroup>
          <Button onClick={onConfirm}>확인</Button>
          <Button onClick={onClose}>취소</Button>
        </ButtonGroup>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
