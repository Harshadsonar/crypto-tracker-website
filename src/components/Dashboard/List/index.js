import React from 'react';
import "./style.css";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from '@mui/material';
import { convertNumber } from '../../../functions/convertNumbers';
import { Link } from 'react-router-dom';

function List({ coin }) {
  return (
    <Link to={`/coin/${coin.id}`}>
    <tr className='list-row'>
         <Tooltip title="Coin logo">
        <td className="td-image">
            <img src={coin.image} className='coin-logo' alt="Coin" />
            {/* Displays the coin image */}
            </td>
            </Tooltip>
                
        <Tooltip title="Coin info">
            <td>
                <div className="name-col">
                    <p className='coin-symbol'>{coin.symbol}</p>
                    <p className='coin-name'>{coin.name}</p>
                </div>
            </td>
        </Tooltip>

        <Tooltip title="Price change in 24Hrs" placement='bottom-start'>
       {coin.price_change_percentage_24h> 0 ? (
       <td className="chip-flex">
                <div className="price-chip">
                    {coin.price_change_percentage_24h.toFixed(2)}%
                    {/* Round off the price percentage value using the toFixed() method */}
                </div>
                <div className="icon-chip td-icon">
                    <TrendingUpRoundedIcon/>   
                    {/* Material UI Icon trending up for green chips. */}
                    </div>
            </td>
            ):(
                <td className="chip-flex">
                <div className="price-chip chip-red">
                    {coin.price_change_percentage_24h.toFixed(2)}%
                </div>
                <div className="icon-chip chip-red td-icon">
                    <TrendingDownRoundedIcon/>   
                    {/* Material UI Icon trending down for red chips. */}
                    </div>
            </td>
            )}
            </Tooltip>

            <Tooltip title="Current Price">
            <td className='desktop-td-price'>
                <h3 className='coin-price td-center-align' 
                    style={{color:coin.price_change_percentage_24h < 0 
                    ? "var(--red)"
                    :"var(--green)"}}
                // Changes color of price from red to green as price percentage increases above 0.
                >
                    ${coin.current_price.toLocaleString()}
                    </h3>
            </td>
            </Tooltip>


            <Tooltip title="Total Volume" placement='bottom-end' >
            <td>
            <p className='total_volume td-right-align td-total-volume'>
                ${coin.total_volume.toLocaleString()}
                {/* toLocaleString() method to add commas to numbers  */}
                </p>
                </td>
                </Tooltip>
                <Tooltip title="Market Cap">
                    <td className='desktop-td-mkt'>
                        <p className='total_volume td-right-align' placement='bottom-end' >
                        ${coin.market_cap.toLocaleString()}
                        </p>
                    </td>
                </Tooltip>

                <Tooltip title="Market Cap">
                    <td className='mobile-td-mkt'>
                        <p className='total_volume td-right-align' placement='bottom-end' >
                        ${convertNumber(coin.market_cap)}
                        {/* ConvertNumber function used to convert the number magnitude to M, B, T. */}
                        </p>
                    </td>
                </Tooltip>
        </tr>
        </Link>
  )
}

export default List;