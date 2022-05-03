import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoAPI";
import Loading from "./Loading";
function Cryptocurrencies({ simplified }) {
  const count = simplified ? 8 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  {
    /*cryptoList?.data?.coins; This is repaced with [] array for searching sake and due to useEffect*/
  }

  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    // setSearchTerm(cryptoList?.data?.coins);
    const filterCrypto = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filterCrypto);
  }, [searchTerm, searchTerm]);
  return (
    <div className="p-2 ">
      <div className="">
        {!simplified && (
          <div className="search-crypto flex justify-center">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search cryptocurrency"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className=" border-2 border-gray-500 py-1 px-3 my-7 w-1/2 rounded-md"
            />
          </div>
        )}

        <div className="conin-info grid grid-cols-2 md:grid-cols-4 gap-5">
          {!isFetching &&
            cryptos?.map((currency) => {
              const {
                uuid,
                rank,
                iconUrl,
                marketCap,
                name,
                change,
                price,
                coinrankingUrl,
              } = currency;
              return (
                <a
                  target="_blank"
                  href={coinrankingUrl}
                  className="bg-gray-200 rounded-md p-5 shadow hover:shadow-lg "
                  key={uuid}>
                  <div>
                    <header className="flex justify-between">
                      <div className="flex space-x-1">
                        <p className=" text-xl">{rank}.</p>
                        <p className="font-bold text-xl">{name}</p>
                      </div>
                      <img src={iconUrl} alt="" className="w-10 h-10" />
                    </header>
                    <div className="body">
                      <p>Price: ${millify(price)}</p>
                      <p>MarketCap: {millify(marketCap)}</p>
                      <p>Change: {change}%</p>
                    </div>
                  </div>
                </a>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Cryptocurrencies;
