import s from "./ErrorMessage.module.css";

type ErrorMessageProps = {
  message?: string;
};

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className={s.error}>
      <p>{message || "Something went wrong..."}</p>
    </div>
  );
}
