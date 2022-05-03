import { useGetCryptosQuery } from "../services/cryptoAPI";
import millify from "millify";
import { Link } from "react-router-dom";
import { Cryptocurrencies, News } from "../Component";
import Loading from "../Component/Loading";

function Home() {
  const { data, isFetching } = useGetCryptosQuery(8);

  if (isFetching) return <Loading />;
  const globalStat = data?.data?.stats;

  return (
    <div className="text-black">
      <div className="cryptostat pb-10">
        <header>
          <h1 className="font-bold text-3xl py-5">Global Crypto Stats</h1>
        </header>
        <div className="grid grid-cols-2 gap-10">
          <div className="total-crypto">
            <h1>Total Cryptocurrencies</h1>
            <p className="digits">{millify(globalStat.total)}</p>
          </div>
          <div className="total-exchanges">
            <h1>Total Exchanges</h1>
            <p className="digits">{millify(globalStat.totalExchanges)}</p>
          </div>
          <div className="total-market-cap">
            <h1>Total Market Cap</h1>
            <p className="digits">{millify(globalStat.totalMarketCap)}</p>
          </div>
          <div className="total-24vol">
            <h1>Total 24 Volume</h1>
            <p className="digits">{millify(globalStat.total24hVolume)}</p>
          </div>
          <div className="total-markets">
            <h1>Total Markets</h1>
            <p className="digits">{millify(globalStat.totalMarkets)}</p>
          </div>
        </div>
      </div>
      {/* top 10 */}
      <div className="cryptocurrencies">
        <h1 className="font-bold text-3xl mb-8">
          Top 10 Cryptocurrencies in the Word
        </h1>

        <Cryptocurrencies simplified />
        <Link
          to="/cryptocurrencies"
          className="font-semibold text-xl text-blue-500">
          Show More
        </Link>
      </div>
      {/* news */}
      <div className="cryptocurrencies-News py-10">
        <h1 className="font-bold text-3xl  mb-8">
          Latest Cryptocurrencies News
        </h1>

        <News simplified />
        <Link to="/news" className="font-semibold text-xl text-blue-500">
          Show More
        </Link>
      </div>
    </div>
  );
}

export default Home;
