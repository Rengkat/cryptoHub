import React, { useEffect, useState } from "react";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import Loading from "./Loading";

function News({ simplified }) {
  const { data: news } = useGetCryptoNewsQuery({
    newsCategory: "cryptocurrency",
    count: simplified ? 6 : 100,
  });

  const defultImg =
    "https://www.howtogeek.com/wp-content/uploads/2021/08/shutterstock_1434643079.jpg?height=200p&trim=2,2,2,2";
  if (!news?.value) return <Loading />;

  return (
    <div className="p-2">
      <div>
        {!simplified && (
          <div className="input flex justify-center">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search news"
              value={""}
              onChange={(e) => {
                "";
              }}
              className=" border-2 border-gray-500 py-1 px-3 my-7 w-1/2 rounded-md"
            />
          </div>
        )}
      </div>
      <div className="conin-info grid grid-cols-2 md:grid-cols-3 gap-5">
        {news.value.map((info, index) => {
          const { name, description, image, url, datePublished, provider } =
            info;
          return (
            <a
              href={url}
              target="_blank"
              key={index}
              className="bg-gray-200 rounded-md p-5 shadow hover:shadow-lg ">
              <div className="flex justify-between">
                <h1 className="font-semibold text-xl">{name}</h1>
                <img
                  src={image?.thumbnail?.contentUrl || defultImg}
                  alt="Image"
                  className="w-20 h-20 object-cover"
                />
              </div>
              <p className="pt-5">
                {description > 100
                  ? `${description.substring(0, 100)}...`
                  : description}
              </p>
              <div className="footer flex space-x-4 pt-5">
                <div className="subHead">
                  <p>{provider[0].name}</p>
                </div>
                <p className="text-xl font-semibold">
                  {new Date(datePublished).getDate()}-
                  {new Date(datePublished).getMonth()}-
                  {new Date(datePublished).getFullYear()}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
  // const [searchNews, setSearchNews] = useState([]);
  // useEffect(()=>{
  //   const filterNews = news.filter((new)=>)
  // },[newsArray, setArray])
}

export default News;
