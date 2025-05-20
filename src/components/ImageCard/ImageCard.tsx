import { ImageType } from "../../api/unsplash";
import s from "./ImageCard.module.css";

type ImageCardProps = {
  image: ImageType;
  onClick: (image: ImageType) => void;
};

export default function ImageCard({ image, onClick }: ImageCardProps) {
  return (
    <li className={s.card} onClick={() => onClick(image)}>
      <img src={image.urls.small} alt={image.alt_description || "Image"} />
    </li>
  );
}
