import React from 'react';
import "./style.css";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Link } from 'react-router-dom';

function Grid({ coin }) {
  return (

    <Link to={`/coin/${coin.id}`}>
    <div className={`grid-container ${coin.price_change_percentage_24h < 0 && "grid-container-red"}`}>  
    
        <div className="info-flex">
            <img src={coin.image} className='coin-logo' alt="Coin" />
            {/* Displays the coin image */}
        <div className="name-col">
        <p className='coin-symbol'>{coin.symbol}</p>
        <p className='coin-name'>{coin.name}</p>
            </div>
        </div>
       {coin.price_change_percentage_24h> 0 ? (
       <div className="chip-flex">
                <div className="price-chip">
                    {coin.price_change_percentage_24h.toFixed(2)}%
                    {/* Round off the price percentage value using the toFixed() method */}
                </div>
                <div className="icon-chip">
                    <TrendingUpRoundedIcon/>   
                    {/* Material UI Icon trending up for green chips. */}
                    </div>
            </div>
            ):(
                <div className="chip-flex">
                <div className="price-chip chip-red">
                    {coin.price_change_percentage_24h.toFixed(2)}%
                </div>
                <div className="icon-chip chip-red">
                    <TrendingDownRoundedIcon/>   
                    {/* Material UI Icon trending down for red chips. */}
                    </div>
            </div>
            )}
            <div className='info-container'>
            <h3 className='coin-price' 
            style={{color:coin.price_change_percentage_24h < 0 
                ? "var(--red)"
                :"var(--green)"}}
                // Changes color of price from red to green as price percentage increases above 0.
                >
                    ${coin.current_price.toLocaleString()}
                    </h3>
            <p className='total_volume'>
                Total Volume : ${coin.total_volume.toLocaleString()}
                {/* toLocaleString() method to add commas to numbers  */}
                </p>
            <p className='total_volume market_cap'>
                Market Cap : ${coin.market_cap.toLocaleString()}
                </p>
            </div>
    </div>
    </Link>
  );
}

export default Grid;