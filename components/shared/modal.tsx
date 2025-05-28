import {
  Modal as HeroModal,
  ModalBody,
  ModalBodyProps,
  ModalContent,
  ModalContentProps,
  ModalHeader,
  ModalHeaderProps,
  ModalProps,
} from "@heroui/modal";
import { cn } from "@heroui/theme";
import React, { ReactNode } from "react";

interface Props extends ModalProps {
  title?: string;
  footer?: ReactNode;
  headerProps?: ModalHeaderProps;
  contentProps?: ModalContentProps;
  bodyProps?: ModalBodyProps;
}

function Modal(props: Props) {
  const { title, footer, headerProps, contentProps, bodyProps, children, ...rest } = props;

  return (
    <HeroModal radius="sm" placement="top" backdrop="blur" {...rest}>
      <ModalContent {...contentProps}>
        <ModalHeader {...headerProps} className={cn({ hidden: !title }, headerProps?.className)}>
          {title}
        </ModalHeader>

        <ModalBody {...bodyProps}>{children}</ModalBody>

        {!!footer && footer}
      </ModalContent>
    </HeroModal>
  );
}

export default Modal;
