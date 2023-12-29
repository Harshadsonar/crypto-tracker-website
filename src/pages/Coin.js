import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCoinData } from "../functions/getCoinData";
import { coinObject } from "../functions/convertObject";
import { settingChartData } from "../functions/settingChartData";
import { getCoinPrices } from "../functions/getCoinPrices";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import SelectDays from "../components/Coin/SelectDays";
import TogglePriceType from "../components/Coin/PriceType";
import LineChart from "../components/Coin/LineChart";
import CoinInfo from "../components/Coin/CoinInfo";
import Footer from "../components/Common/Footer";
import List from "../components/Dashboard/List";

// component for the coin page-------------
function CoinPage() {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const [loading, setLoading] = useState(false);
  const [days, setDays] = useState(120);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getData();
  }, [id]);

  // getData funtion to get  the coin data-------------
  const getData = async () => {
    setLoading(true);
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoin, data); //For Coin Obj being passed in the List
      const prices = await getCoinPrices(id, days, priceType);
      if (prices) {
        settingChartData(setChartData, prices, data);
        setLoading(false);
      }
    }
  };

  // function to handle the days changing--------------
  const handleDaysChange = async (event) => {
    setLoading(true);
    setDays(event.target.value);
    const prices = await getCoinPrices(id, event.target.value, priceType);
    if (prices) {
      settingChartData(setChartData, prices, coin);
      setLoading(false);
    }
  };

  // function to handle the price type----------------
  const handlePriceTypeChange = async (event) => {
    setLoading(true);
    setPriceType(event.target.value);
    const prices = await getCoinPrices(id, days, event.target.value);
    if (prices) {
      settingChartData(setChartData, prices, coin);
    }
    setLoading(false);
  };

  return (
    <div>
      <Header />
      {loading || !coin?.id || !chartData ? (
        <Loader />
      ) : (
        <>
          <div className="grey-wrapper">
            <List coin={coin} delay={0.1} />
          </div>
          <div className="grey-wrapper">
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <TogglePriceType
              handlePriceTypeChange={handlePriceTypeChange}
              priceType={priceType}
            />
            <LineChart chartData={chartData} priceType={priceType} />
          </div>
          <CoinInfo name={coin.name} desc={coin.desc} />
        </>
      )}
      <Footer />
    </div>
  );
}

export default CoinPage;