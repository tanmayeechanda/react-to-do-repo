import styles from "./Title.module.css";
import Typography from "../Typography/Typography";

function Title() {
  return (
    <div className={styles.titleContainer}>
        <Typography fontSize={24} bold>
          A to-do-List UI
          </Typography>
      
    </div>
  )
}

export default Title
