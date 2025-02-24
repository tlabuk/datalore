import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import styles from "./styles.module.css";

const ZoomImg = (props) => (
  <Zoom>
    <img {...props} img="true" className={styles.center} />
  </Zoom>
);

export default ZoomImg;
