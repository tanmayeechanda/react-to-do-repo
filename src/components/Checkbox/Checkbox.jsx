import { useState } from "react";
import check from "../../assets/check.svg";
import styles from "./Checkbox.module.css";

function Checkbox() {
    const [checked , setChecked] = useState(false);
  return (
    <div className={checked?styles.active:styles.checkbox}>
      <input type="checkbox" onChange={(e)=>setChecked( e.target.checked)} />
      <img src={check} alt="check" />
    </div>
  )
}

export default Checkbox 
