import Typography from "../Typography/Typography";
import styles from "./Card.module.css";
import Checkbox from "../Checkbox/Checkbox";  
import ActionButton from "../ActionButton/ActionButton";
import pencil from "../../assets/pencil.svg";
import trash from "../../assets/trash.svg";
function Card() {
  return (
    <div className={styles.card}>
        <div className={styles.taskName}> 
          <Checkbox/>
           <Typography fontSize={24}>Do the dishes</Typography>
        </div>
        <div className={styles.actionButtons}>
           <ActionButton icon={pencil} handleClick={()=>null}/>
           <ActionButton icon={trash} handleClick={()=>null}/>
        </div>
    
    </div>
  )
}

export default Card;
