import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const OilPrice = () => {
  const [prices, setPrices] = useState(null);
  const [isLoading, setIsloading] = useState(false);

  const loadData = async () => {
    setIsloading(true);
    const response = await axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .catch((err) => {
        if (err.toJSON().message === "Network Error") {
          alert("You have no internet connection");
          console.log(err.toJSON());
        }
      });
    const data = response.data;
    setPrices(data.bpi["USD"].rate);
    setIsloading(false);
    // console.log(prices);
  };

  const getDate = new Date();
  const getHours = getDate.getHours();
  const getMinutes = getDate.getMinutes();

  useEffect(() => {
    loadData();
    const updatePrice = setInterval(() => {
      loadData();
    }, 60000);
    return () => clearInterval(updatePrice);
  }, []);

  return (
    <>
      <div className="w-full flex flex-row mt-20">
        <div className="w-1/2 p-20 flex flex-col justify-center">
          <h2 className="text-4xl text-slate-800 font-bold">
            Real-time Crude Oil Prices (WTI)
          </h2>
          <p className="mt-10 text-xl text-slate-600">
            Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem
            ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
          </p>
        </div>
        <div className="w-1/2 overflow-hidden relative">
          <Image
            alt="shape"
            width="0"
            height="0"
            src="/images/blob.svg"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: "rotate(180deg)",
            }}
          />
          <div className="absolute top-[calc(50%-40px)] left-[calc(50%-150px)] w-[300px] h-20 bg-slate-800 shadow-lifted text-lg text-slate-100 font-semibold rounded-full flex justify-center items-center">
            {prices} USD
            <div className="absolute w-[200px] -bottom-10 left-[calc(50%-100px)] text-sm flex justify-center text-slate-800 items-center font-thin">
              Last update{" "}
              {`${getHours < 10 ? "0" + getHours : getHours}:${
                getMinutes < 10 ? "0" + getMinutes : getMinutes
              }`}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OilPrice;
