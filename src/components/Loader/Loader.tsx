import { JSX } from "react";
import s from "./Loader.module.css";
import { ClipLoader } from "react-spinners";

export default function Loader(): JSX.Element {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <ClipLoader className={s.loader} />
    </div>
  );
}
