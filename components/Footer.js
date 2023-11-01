import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div
        id="footer"
        className="w-full bg-slate-900 mt-20 rounded-md overflow-hidden py-10 px-10 sm:py-20 sm:px-20"
      >
        <div className="grid grid-cols-1 xl:grid-cols-4 h-full gap-10 ">
          <div className="bg-slate-900 flex justify-start items-center flex-col">
            <h2 className="text-lg font-semibold text-green-400 text-center">
              rockstar®
            </h2>
          </div>

          <div className="bg-slate-900 flex justify-start items-start flex-col">
            <h2 className="text-lg font-semibold text-gray-100 mb-5 text-left">
              Contact us
            </h2>
            <ul className="text-left text-gray-400">
              <li className="mb-2">Fax: +1 (555) 905-2345</li>
              <li className="mb-2">Press: +1 (555) 905-2398</li>
            </ul>
          </div>

          <div className="bg-slate-900 flex justify-start items-start flex-col">
            <h2 className="text-lg font-semibold text-gray-100 mb-5">
              Navigation
            </h2>
            <ul className="text-left text-gray-400">
              <li className="mb-2">
                <Link href="/#about">About us</Link>
              </li>
              <li className="mb-2">
                <Link href="/#leadership">Leadership team</Link>
              </li>
              <li className="mb-2">
                <Link href="/#mission">Our Mission</Link>
              </li>
              <li className="mb-2">
                <Link href="/#story">Our Story</Link>
              </li>
              <li className="mb-2">
                <Link href="/vacancies">Career</Link>
              </li>
              <li className="mb-2">
                <Link href="/tenders">Tenders</Link>
              </li>
            </ul>
          </div>

          <div className="bg-slate-900 flex justify-start items-start flex-col">
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
