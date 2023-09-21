const Footer = () => {
  return (
    <>
      <div
        id="footer"
        className="w-full bg-slate-900 mt-20 rounded-md overflow-hidden py-20"
      >
        <div className="grid grid-cols-4 h-full">
          <div className="bg-slate-900 p-14 flex justify-start items-center flex-col">
            <h2 className="text-lg font-semibold text-green-400 text-center">
              rockstar®
            </h2>
          </div>

          <div className="bg-slate-900 p-14 flex justify-start items-start flex-col">
            <h2 className="text-lg font-semibold text-gray-100 mb-5 text-left">
              Contact us
            </h2>
            <ul className="text-left text-gray-400">
              <li className="mb-2">Fax: +1 (555) 905-2345</li>
              <li className="mb-2">Secretary: +1 (555) 905-2317</li>
              <li className="mb-2">Press: +1 (555) 905-2398</li>
            </ul>
          </div>

          <div className="bg-slate-900 p-14 flex justify-start items-start flex-col">
            <h2 className="text-lg font-semibold text-gray-100 mb-5">
              Navigation
            </h2>
            <ul className="text-left text-gray-400">
              <li className="mb-2">
                <a href="/#about">About us</a>
              </li>
              <li className="mb-2">
                <a href="/#leadership">Leadership team</a>
              </li>
              <li className="mb-2">
                <a href="/#mission">Our Mission</a>
              </li>
              <li className="mb-2">
                <a href="/#story">Our Story</a>
              </li>
              <li className="mb-2">
                <a href="/vacancies">Career</a>
              </li>
              <li className="mb-2">
                <a href="/tenders">Tenders</a>
              </li>
            </ul>
          </div>

          <div className="bg-slate-900 p-14 flex justify-start items-start flex-col">
            <h2 className="text-lg font-semibold text-gray-100 mb-5">Links</h2>
            <ul className="text-left text-gray-400">
              <li className="mb-2">
                <a href="https://oilprice.com/">Crude oil prices</a>
              </li>
              <li className="mb-2">
                <a href="https://www.capp.ca/">CAPP</a>
              </li>
              <li className="mb-2">
                <a href="https://www.api.org/">API</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
