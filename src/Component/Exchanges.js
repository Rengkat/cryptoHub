import React, { useState } from "react";
// import { useGetExchangesQuery } from "../services/cryptoAPI";
import { useGetCryptosQuery } from "../services/cryptoAPI";
import millify from "millify";
import Loading from "../Component/Loading";
function Exchanges() {
  const { data: cryptoList, isFetching } = useGetCryptosQuery(100);
  const [show, setShow] = useState(false);
  console.log(cryptoList?.data);
  return (
    <div className="text-black ">
      {/* <div className="w-3/4 flex justify-between mx-auto">
        <h1>Exchange</h1>
        <h1>MarketCap</h1>
        <h1>Price</h1>
        <h1>Change</h1>
      </div> */}
      {!isFetching &&
        cryptoList?.data?.coins.map((currency) => {
          const { uuid, rank, iconUrl, name, change, marketCap, price } =
            currency;

          return (
            <div
              className="conatiner flex w-3/4 mx-auto justify-between border-gray-200 py-3 border-b-2"
              key={uuid}>
              <div className="exch flex justify-between space-x-2">
                <p>{rank}.</p>
                <img src={iconUrl} alt="" className="w-8 h-8" />
                <p className="font-semibold">{name}</p>
              </div>
              <div className="vol">
                <p>{millify(marketCap)}</p>
              </div>
              <div className="price">
                <p>{millify(price)}</p>
              </div>
              <div className="change">
                <p>${change}</p>
              </div>
              <p></p>
            </div>
          );
        })}
    </div>
  );
}

export default Exchanges;
