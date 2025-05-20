import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { ImageType } from "../../api/unsplash";

type ImageGalleryProps = {
  images: ImageType[];
  onImageClick: (image: ImageType) => void;
};

export default function ImageGallery({
  images,
  onImageClick,
}: ImageGalleryProps) {
  return (
    <ul className={s.gallery}>
      {images.map((img) => (
        <ImageCard key={img.id} image={img} onClick={onImageClick} />
      ))}
    </ul>
  );
}
