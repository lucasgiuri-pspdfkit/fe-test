import React, { useRef } from "react";
// Types
import { ListItem } from "../../types";
// Components
import Image, { availableRoundedSizes } from "../image/image";
import Text, { availableTextTypes } from "../text/text";
import Button, {
  availableButtonTypes,
  availableVariants,
} from "../button/button";

export type ModalProps = {
  event: ListItem;
  onClose: () => void;
};

/**
 * Modal component
 * @param {ListItem} event - Event data
 */

const Modal = ({ event, onClose }: ModalProps) => {
  const modalRef = useRef(null);
  const { img, title, location, date, coverUrl } = event;

  const formatDate = (timestamp: number) => {
    const formattedDate = new Date(timestamp);
    return formattedDate.toLocaleString();
  };

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-white bg-opacity-60"
      onClick={handleClickOutside}
      data-testid="modal"
    >
      <div
        className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg flex flex-col"
        ref={modalRef}
      >
        <div className="flex justify-center pb-6">
          <Image
            src={img.src}
            alt={img.alt}
            width={400}
            height={400}
            roundedSize={availableRoundedSizes["3xl"]}
          />
        </div>
        <div className="flex flex-col gap-y-3">
          <Text text={title} type={availableTextTypes.h3} isBold />
          <Text text={location} type={availableTextTypes.p} />
          <div className="flex gap-x-2">
            <Text text={formatDate(date.start)} type={availableTextTypes.h4} />
            <Text text="-" type={availableTextTypes.h4} />
            <Text text={formatDate(date.end)} type={availableTextTypes.h4} />
          </div>
        </div>
        <div className="flex justify-center pt-6 lg:hidden">
          <Button
            onClick={onClose}
            type={availableButtonTypes.button}
            variant={availableVariants.primary}
            text="Close"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
