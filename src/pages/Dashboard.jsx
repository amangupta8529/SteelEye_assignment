import { useState } from "react";

// Data
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";

// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";

const Dashboard = () => {
  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});

  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle primaryTitle="Orders" secondaryTitle="6 orders" />
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <Card
            cardData={selectedOrderDetails.executionDetails}
            title="Selected Order Details"
          />
          <Card
            cardData={selectedOrderTimeStamps.timestamps}
            title="Selected Order Timestamps"
          />
        </div>
        <List setSelectedOrderTimeStamps={setSelectedOrderTimeStamps} setSelectedOrderDetails={setSelectedOrderDetails} currency={currency} rows={
          searchText?(
            mockData.results.filter((f)=>{
              // console.log(f)
              if(f["&id"]===searchText){
                return f
              }
            })
          ):(mockData.results)
        }  timestamps={timestamps.results} />
      </div>
    </div>
  );
};

export default Dashboard;
