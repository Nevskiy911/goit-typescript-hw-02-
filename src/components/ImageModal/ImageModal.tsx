import s from "./ImageModal.module.css";
import { ImageType } from "../../api/unsplash";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

type ImageModalProps = {
  isOpen: boolean;
  image: ImageType | null;
  onRequestClose: () => void;
};

export default function ImageModal({
  isOpen,
  image,
  onRequestClose,
}: ImageModalProps) {
  if (!image) return null;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <button onClick={onRequestClose} className={s.closeButton}>
        &times;
      </button>
      <img
        src={image.urls.full}
        alt={image.alt_description || "Image"}
        className={s.image}
      />
    </ReactModal>
  );
}
