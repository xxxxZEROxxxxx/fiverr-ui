import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";



const Navbar = () => {
  const [active, setActive] = useState(false);
  const [click, setClick] = useState(false);
  const { pathname } = useLocation();
  const carnetUser = { id: 1, name: "alaa", isSeller: true ,isLogin:true };
  // id:1 name:alaa  isSeller
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
        active || pathname !== "/"
          ? "bg-white text-black   "
          : "bg-[#013914] text-white"
      } 
      flex flex-col items-center   transition-all duration-500 ease-linear z-[999]	 sticky top-0 `}
    >
      <div className="  flex   sm:justify-between justify-center w-[640px] md:w-[1200px]  sm:w-[1200px] py-[20px]  px-0">
        <div className="logo text-4xl font-bold ">
          <Link to={"/"}>
            <span>fiverr</span>
            <span className="text-[#1dbf73]">.</span>
          </Link>
        </div>
        <div className="links flex gap-6  font-medium items-center ">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span className="flex items-center gap-[5px]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
              className={active || pathname !== "/"
              ? "fill-current text-gray-500 hover:text-blue-500 cursor-pointer"
              : "fill-white"}
                d="M9 1C4.58875 1 1 4.58875 1 9C1 13.4113 4.58875 17 9 17C13.4113 17 17 13.4113 17 9C17 4.58875 13.4113 1 9 1ZM8.53125 4.92676C7.81812 4.89612 7.11218 4.7959 6.43811 4.63293C6.54578 4.37781 6.6626 4.13281 6.78857 3.90063C7.30542 2.94824 7.93994 2.27991 8.53125 2.03784V4.92676ZM8.53125 5.86499V8.53125H5.60339C5.64465 7.4906 5.82202 6.45752 6.11536 5.51782C6.8927 5.71362 7.70874 5.83215 8.53125 5.86499ZM8.53125 9.46875V12.135C7.70874 12.1678 6.8927 12.2864 6.11536 12.4822C5.82202 11.5425 5.64465 10.5094 5.60339 9.46875H8.53125ZM8.53125 13.0732V15.9622C7.93994 15.7201 7.30542 15.0518 6.78857 14.0994C6.6626 13.8672 6.54578 13.6222 6.43811 13.3671C7.11218 13.2041 7.81799 13.1039 8.53125 13.0732ZM9.46875 13.0732C10.1819 13.1039 10.8878 13.2041 11.5619 13.3671C11.4542 13.6222 11.3374 13.8672 11.2114 14.0994C10.6946 15.0518 10.0601 15.7201 9.46875 15.9622V13.0732ZM9.46875 12.135V9.46875H12.3966C12.3553 10.5094 12.178 11.5425 11.8846 12.4822C11.1073 12.2864 10.2913 12.1678 9.46875 12.135ZM9.46875 8.53125V5.86499C10.2913 5.83215 11.1073 5.71362 11.8846 5.51782C12.178 6.45752 12.3553 7.4906 12.3966 8.53125H9.46875ZM9.46875 4.92676V2.03784C10.0601 2.27991 10.6946 2.94824 11.2114 3.90063C11.3374 4.13281 11.4542 4.37781 11.5619 4.63293C10.8878 4.7959 10.1819 4.89612 9.46875 4.92676ZM12.0354 3.45349C11.8007 3.02087 11.5457 2.63953 11.2769 2.31421C12.2141 2.63428 13.0631 3.14636 13.7771 3.8031C13.3699 4.02124 12.931 4.21069 12.4694 4.36902C12.3384 4.0509 12.1936 3.74487 12.0354 3.45349ZM5.9646 3.45349C5.8064 3.74487 5.66162 4.0509 5.53064 4.36902C5.06897 4.21069 4.63013 4.02112 4.2229 3.8031C4.93689 3.14636 5.78589 2.63428 6.72314 2.31421C6.45435 2.63953 6.19946 3.02075 5.9646 3.45349ZM5.2135 5.25012C4.89355 6.27368 4.70544 7.38953 4.66492 8.53125H1.95349C2.05383 7.00769 2.63892 5.61438 3.5564 4.50525C4.06555 4.79724 4.62317 5.047 5.2135 5.25012ZM4.66492 9.46875C4.70544 10.6106 4.89355 11.7263 5.2135 12.7499C4.62317 12.953 4.06555 13.2028 3.5564 13.4948C2.63892 12.3856 2.05383 10.9923 1.95349 9.46875H4.66492ZM5.53064 13.631C5.66162 13.9491 5.8064 14.2551 5.9646 14.5465C6.19946 14.9791 6.45435 15.3605 6.72314 15.6858C5.78589 15.3657 4.93689 14.8536 4.22302 14.1969C4.63 13.9789 5.06897 13.7893 5.53064 13.631ZM12.0354 14.5465C12.1936 14.2551 12.3384 13.9491 12.4694 13.631C12.931 13.7893 13.3699 13.9789 13.7771 14.1969C13.0631 14.8536 12.2141 15.3657 11.2769 15.6858C11.5457 15.3605 11.8005 14.9792 12.0354 14.5465ZM12.7865 12.7499C13.1064 11.7263 13.2946 10.6105 13.3351 9.46875H16.0465C15.9462 10.9923 15.3611 12.3856 14.4436 13.4948C13.9344 13.2028 13.3768 12.953 12.7865 12.7499ZM13.3351 8.53125C13.2946 7.3894 13.1064 6.27368 12.7865 5.25012C13.3768 5.047 13.9344 4.79724 14.4436 4.50525C15.3611 5.61438 15.9462 7.00769 16.0465 8.53125H13.3351Z"
                stroke-width="0.2"
              ></path>
            </svg>
            English
          </span> 
          {!carnetUser?.isSeller && <span>Become a Seller</span>}
          {!carnetUser.isLogin && <span>Sign in </span>}
         
          {!carnetUser.isLogin && (
            <button
              className={`py-[5px] px-[20px] ${
                active || pathname !== "/"
                  ? " text-[#1dbf73] border border-solid  rounded-md  cursor-pointer  hover:text-white hover:bg-green-500 active:bg-green-700 border-green-500 "
                  : "border border-solid border-white rounded-md  cursor-pointer   hover:bg-green-500 hover:border-green-500 active:bg-green-700"
              }   `}
            >
              Join
            </button>
          )}
          {carnetUser.isLogin&& (
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
              <span>{carnetUser.name}</span>
              {click && (
                <div className="option  absolute top-12 right-0 p-5 bg-white  border border-[#d3d3d3]  rounded-[10px] flex flex-col  gap-2 text-gray-500 w-[200px] font-light">
                  { carnetUser.isSeller && (
                    <>
                      <Link to={"/myGigs"}>Gigs</Link>
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
      {pathname != "/" || active ? (
        <>
          <hr className="w-full h-0 border-[0.5px] border-solid " />
          <div className="w-[1200px] py-[10px]  sm:flex hidden justify-between font-light text-gray-500">
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
      ) : null}
    </div>
  );
};

export default Navbar;
