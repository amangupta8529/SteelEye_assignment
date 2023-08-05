import styles from "./ListRow.module.css";

const ListCell = ({ children,row,timestamp,setSelectedOrderDetails,setSelectedOrderTimeStamps }) => {
  return <tr  onClick={()=>{setSelectedOrderDetails(row);setSelectedOrderTimeStamps(timestamp)}} className={styles.cell}>{children}</tr>;
};

export default ListCell;
