import { useEffect, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <div
      className={`${  active ? "bg-white text-black  " : "bg-[#013914] text-white " } 
      flex flex-col items-center  transition-all duration-500 ease-linear	 sticky top-0 `}
    >
      <div className="  flex  justify-between  w-[1200px] py-[20px]  px-0">
        <div className="logo text-4xl font-bold">
          <span>fiverr</span>
          <span className="text-[#1dbf73]">.</span>
        </div>
        <div className="links flex gap-6  font-medium items-center font-sans">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in </span>
          <span>Become a Seller</span>
          <button className="py-[10px] px-[20px] text-white border border-solid border-white rounded-md  cursor-pointer   hover:bg-green-500 hover:border-green-500 ">
            Join
          </button>
        </div>
      </div>
      {active && (
        <>
          {" "}
          <hr className="w-full h-0 border-[0.5px] border-solid " />
          <div className="w-[1200px] py-[10px] flex justify-between font-light text-gray-500">
            <span>Test </span>
            <span>Test 2 </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
