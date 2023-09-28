const Featured = () => {
  return (
  <div className="featured h-[500px] flex justify-center  bg-[#013914] text-white">
      <div className="container w-[1200px] flex items-center  ">
        <div className="left flex flex-col gap-[30px] ">
          <h1 className="text-[50px]">
            Find the perfect <i className="font-light">freelance</i> services for your business
          </h1>
          <div className="search flex items-center  justify-between bg-white rounded-md ">
            <div className="searchInput flex items-center gap-[10px]">
              <img className="w-5 h-5 m-2" src="./img/search.png" alt="" />
              <input className="border-none outline-none text-black" type="text" placeholder='Try "building mobil app"' />
            </div>
            <button className=" w-[120px] h-[50px] bg-[#1dbf73] cursor-pointer rounded-r-[5px]">Search</button>
          </div>
          <div className="popular flex items-center gap-3">
            <span>Popular:</span>
            <button  className="border border-solid border-white bg-transparent py-[5px] px-[10px] rounded-[20px]">Web Design</button>
            <button className="border border-solid border-white bg-transparent py-[5px] px-[10px] rounded-[20px]">WordPress</button>
            <button className="border border-solid border-white bg-transparent py-[5px] px-[10px] rounded-[20px]">Logo Design</button>
            <button className="border border-solid border-white bg-transparent py-[5px] px-[10px] rounded-[20px]">AI Services</button>
          </div>
        </div>
        <div className=" h-full ">
          <img className="h-[500px] " src="./img/man.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
