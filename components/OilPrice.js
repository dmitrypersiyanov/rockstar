// import { useEffect, useState } from "react";
// import axios from "axios";
import Image from "next/image";

// const round = (num) => Math.ceil(parseFloat(num));

const OilPrice = () => {
  // const [prices, setPrices] = useState(null);
  // const [isLoading, setIsloading] = useState(false);

  // const loadData = async () => {
  //   setIsloading(true);
  //   const response = await axios
  //     .get("https://api.coindesk.com/v1/bpi/currentprice.json")
  //     .catch((err) => {
  //       if (err.toJSON().message === "Network Error") {
  //         alert("Please check your internet connection");
  //         console.log(err.toJSON());
  //       }
  //     });
  //   const data = response.data;
  //   setPrices(data.bpi["USD"].rate);
  //   setIsloading(false);
  //   console.log(prices);
  // };

  // const getDate = new Date();
  // const getHours = getDate.getHours();
  // const getMinutes = getDate.getMinutes();

  // useEffect(() => {
  //   loadData();
  //   const updatePrice = setInterval(() => {
  //     loadData();
  //   }, 60000);
  //   return () => clearInterval(updatePrice);
  // }, []);

  return (
    <>
      <div className="w-full flex flex-col md:flex-row mt-14 sm:mt-20">
        <div className="w-full md:w-1/2 xl:p-20 flex flex-col justify-center">
          <h2 className="text-3xl lg:text-4xl text-slate-800 font-bold">
            Real-time Crude Oil Prices
          </h2>
          <p className="mt-10 text-lg lg:text-xl text-slate-600">
          Stay updated with real-time crude oil prices. 
          We provide regular updates to keep you informed about the 
          latest market trends and price movements.
          </p>
        </div>
        <div className="w-full md:w-1/2 overflow-hidden relative">
          <Image
            alt="shape"
            width="1000"
            height="1000"
            src="/images/blob.svg"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-[calc(50%-20px)] left-[calc(50%-100px)] sm:left-[calc(50%-125px)] w-[200px] sm:w-[250px] h-14 sm:h-14 lg:h-14 bg-slate-800 shadow-lifted text-md text-slate-100 font-semibold rounded-full flex justify-center items-center">
            89 USD / per bbl
            {/* {round(prices)} USD / per bbl */}
            {/* <div className="absolute w-[200px] -bottom-10 left-[calc(50%-100px)] text-sm flex justify-center text-slate-800 items-center font-thin">
              Last update{" "}
              {`${getHours < 10 ? "0" + getHours : getHours}:${
                getMinutes < 10 ? "0" + getMinutes : getMinutes
              }`}
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default OilPrice;
