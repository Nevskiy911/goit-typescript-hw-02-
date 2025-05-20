import s from "./LoadMoreBtn.module.css";

type LoadMoreButtonProps = {
  onClick: () => void;
};

export default function LoadMoreButton({ onClick }: LoadMoreButtonProps) {
  return (
    <button onClick={onClick} className={s.btn}>
      Load More
    </button>
  );
}
