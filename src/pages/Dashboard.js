import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../components/Common/Header';
import TabsComponent from '../components/Dashboard/Tabs';

function DashboardPage() {

  const [coins,setCoins] = useState([]);

  useEffect(() => {
    // fetch(
    //   "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    // )
    // .then((res)=>res.json())
    // .then((data)=>{});

    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
    .then((response) => {
      setCoins(response.data);
    })
    .catch((error) => {
    })
  }, []);
  return (
    <div>
        <Header />
        <TabsComponent coins={coins} />
    </div>
  )
}

export default DashboardPage;