import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [click, setClick] = useState(false);
  const {pathname} = useLocation()
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
        active||pathname!=="/" ? "bg-white text-black  " : "bg-[#013914] text-white "
      } 
      flex flex-col items-center   transition-all duration-500 ease-linear z-[999]	 sticky top-0 `}
    >
      <div className="  flex  justify-between  w-[1200px] py-[20px]  px-0">
        <div className="logo text-4xl font-bold ">
          <Link to={"/"}>
           
            <span>fiverr</span>
            <span className="text-[#1dbf73]">.</span>
          </Link>
        </div>
        <div className="links flex gap-6  font-medium items-center ">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          {!carnetUser && <span>Sign in </span>}
          {!carnetUser?.isSeller && <span>Become a Seller</span>}
          {!carnetUser && (
            <button
              className={`py-[10px] px-[20px] ${
                active||pathname!=="/"
                  ? ""
                  : "border border-solid border-white rounded-md  cursor-pointer   hover:bg-green-500 hover:border-green-500"
              }   `}
            >
              Join
            </button>
          )}
          {carnetUser && (
            <div
              onClick={() => {
                setClick((prms) => !prms);
              }}
              className=" flex items-center gap-3 cursor-pointer relative"
            >
              <img
                className="w-8 h-8 rounded-[50%] object-cover"
                src="https://image.lexica.art/full_jpg/7515495b-982d-44d2-9931-5a8bbbf27532"
                alt=""
              />
              <span>{carnetUser?.name}</span>
              {click && (
                <div
                 
                  className="option  absolute top-12 right-0 p-5 bg-white  border border-[#d3d3d3]  rounded-[10px] flex flex-col  gap-2 text-gray-500 w-[200px] font-light"
                >
                  {carnetUser.isSeller && (
                    <>
                      <Link  to={"/myGigs"}>Gigs</Link>
                      <Link to={"/add"}>Add New Gigs</Link>
                    </>
                  )}
                  <Link to={"/orders"}>Orders</Link>
                  <Link to={"/messages"}>Messages</Link>
                  <Link to={"/"}>Logout</Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {pathname!="/"||active ? (
        <>
          <hr className="w-full h-0 border-[0.5px] border-solid " />
          <div className="w-[1200px] py-[10px] flex justify-between font-light text-gray-500">
          <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
          </div>
        </>
      ):null}
    </div>
  );
};

export default Navbar;
