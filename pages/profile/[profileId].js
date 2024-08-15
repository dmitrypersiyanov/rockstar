import { useRouter } from "next/router";
import { boardmembers } from "@/data/boardmembers";
import { mds } from "@/data/mds";
import Image from "next/image";
import Quote from "@/components/Quote";

const ProfileDescription = () => {
  const router = useRouter();
  const profileId = router.query.profileId;

  return (
    <>
      {profileId === "Nickolas Krasynski" || profileId === "Ethan Jackson"
        ? mds
            .filter((md) => md.name === profileId)
            .map((md) => {
              return (
                <>
                  <div key={md.id} className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="w-full h-full bg-slate-100 overflow-hidden p-8 sm:p-10 md:p-20 lg:p-14 xl:p-20 border-t-[20px] border-b-0 lg:border-b-[20px] border-slate-700 ">
                      <h2 className="font-bold text-lg sm:text-xl text-slate-800">
                        {md.name}
                      </h2>
                      <h3 className="text-md sm:text-lg text-slate-800 mb-10">
                        {md.title}
                      </h3>
                      <div className="w-full h-72 sm:h-96 lg:h-64 xl:h-96 rounded-md overflow-hidden relative">
                        <Image
                          src={md.image}
                          alt={md.name}
                          fill
                          objectFit="cover"
                          placeholder="blur"
                          blurDataURL="/images/placeholder.jpg"
                        />
                      </div>
                      <div className="flex flex-row items-center mt-10">
                        <a
                          className="inline-block"
                          href="https://www.linkedin.com/"
                        >
                          <span className="inline-block -mb-1">
                            <Image
                              alt="linkedin"
                              src="/images/linkedin.png"
                              width="20"
                              height="20"
                            />
                          </span>
                        </a>
                        <a
                          className="inline-block"
                          href="https://www.twitter.com/"
                        >
                          <span className="inline-block ml-1 -mb-1">
                            <Image
                              alt="twitter"
                              src="/images/twitter.png"
                              width="20"
                              height="20"
                            />
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="w-full h-full bg-green-400 overflow-hidden p-8 sm:p-10 md:p-20 lg:p-14 xl:p-20 border-y-[20px] border-slate-700 ">
                      <h2 className="font-bold text-xl text-slate-900">
                        Biography
                      </h2>
                      <p className="text-lg text-slate-800 mt-5">{md.bio}</p>
                      <p className="text-lg text-slate-800 mt-5">{md.bio}</p>
                      <p className="text-lg text-slate-800 mt-5">{md.bio}</p>
                    </div>
                  </div>
                  <Quote quote={md.quote} />
                </>
              );
            })
        : boardmembers
            .filter((bm) => bm.name === profileId)
            .map((bm) => {
              return (
                <>
                  <div key={bm.id} className=" grid grid-cols-1 lg:grid-cols-2">
                    <div className="w-full h-full bg-slate-50 overflow-hidden p-8 sm:p-10 md:p-20 lg:p-14 xl:p-20 border-t-[20px] border-b-0 lg:border-b-[20px] border-slate-700 ">
                      <h2 className="font-bold text-lg sm:text-xl text-slate-800">
                        {bm.name}
                      </h2>
                      <h3 className="text-md sm:text-lg text-slate-800 mb-10">
                        {bm.title}
                      </h3>
                      <div className="w-full h-72 sm:h-96 lg:h-64 xl:h-96 rounded-md overflow-hidden relative">
                        <Image
                          src={bm.image}
                          alt={bm.name}
                          fill
                          objectFit="cover"
                          placeholder="blur"
                          blurDataURL="/images/placeholder.jpg"
                        />
                      </div>
                      <div className="flex flex-row items-center mt-10">
                        <a
                          className="inline-block"
                          href="https://www.linkedin.com/"
                        >
                          <span className="inline-block -mb-1">
                            <Image
                              alt="linkedin"
                              src="/images/linkedin.png"
                              width="20"
                              height="20"
                            />
                          </span>
                        </a>
                        <a
                          className="inline-block"
                          href="https://www.twitter.com/"
                        >
                          <span className="inline-block ml-1 -mb-1">
                            <Image
                              alt="twitter"
                              src="/images/twitter.png"
                              width="20"
                              height="20"
                            />
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="w-full h-full bg-green-400 overflow-hidden p-8 sm:p-10 md:p-20 lg:p-14 xl:p-20 border-y-[20px] border-slate-700 ">
                      <h2 className="font-bold text-xl text-slate-900">
                        Biography
                      </h2>
                      <p className="text-lg text-slate-800 mt-5">{bm.bio}</p>
                      <p className="text-lg text-slate-800 mt-5">{bm.bio}</p>
                      <p className="text-lg text-slate-800 mt-5">{bm.bio}</p>
                    </div>
                  </div>
                  <Quote quote={bm.quote} />
                </>
              );
            })}
    </>
  );
};

export default ProfileDescription;
