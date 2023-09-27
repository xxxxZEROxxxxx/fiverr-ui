import { useEffect, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [click, setClick] = useState(false);
  const carnetUser = {
    id: 1,
    name: "alaa",
    isSeller: true,
  };

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
      className={`${
        active ? "bg-white text-black  " : "bg-[#013914] text-white "
      } 
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
          {!carnetUser && <span>Sign in </span>}
          {!carnetUser?.isSeller && <span>Become a Seller</span>}
          {!carnetUser && (
            <button
              className={`py-[10px] px-[20px] ${
                active
                  ? ""
                  : "border border-solid border-white rounded-md  cursor-pointer   hover:bg-green-500 hover:border-green-500"
              }   `}
            >
              Join
            </button>
          )}
          {carnetUser && (
            <div onClick={()=>{setClick((prms)=>!prms)}}  className=" flex items-center gap-3 cursor-pointer relative">
              <img className="w-8 h-8 rounded-[50%] object-cover" src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=160" alt="" />
              <span>{carnetUser?.name}</span>
             {click&& <div onClick={(e)=>e.stopPropagation()} className="option  absolute top-12 right-0 p-5 bg-white  border border-[#d3d3d3]  rounded-[10px] flex flex-col  gap-2 text-gray-500 w-[200px] font-light">
                {carnetUser.isSeller && (
                  <>
                    <span>Gigs</span>
                    <span>Add New Gigs</span>
                  </>
                )}
                <span>Orders</span>
                <span>Messages</span>
                <span>Logout</span>
              </div>}
            </div>
          )}
        </div>
      </div>
      {active && (
        <>
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
