import React, {CSSProperties} from 'react';
import styles from "./styles.module.scss";

interface TilePropsType {
  children: React.ReactChild | React.ReactNode
  style?: CSSProperties
}

const Tile = ({children, style}: TilePropsType) => {
  return (
    <div className={styles.tile} style={style}>
      {children}
    </div>
  );
};

export default Tile;