import Featured from "../../Components/Featured";
import Slide from "../../Components/Slide/Slide";




const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <Slide />
      <Features />
      <FeaturesDark />
    </div>
  );
};



const TrustedBy = () => {
  return (
    <div className="bg-[#fafafa] h-full flex justify-center">
      <div className=" font-medium w-[760px] flex items-center justify-center gap-5 text-[#d3d3d3] ">
        <span>Trusted by:</span>
        <img
          className="h-[70px] object-contain"
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta.12b5e5c.png"
          alt=""
        />
        <img
          className="h-[70px] object-contain"
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png"
          alt=""
        />
        <img
          className="h-[70px] object-contain"
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png"
          alt=""
        />
        <img
          className="h-[70px] object-contain"
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png"
          alt=""
        />
        <img
          className="h-[70px] object-contain"
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png"
          alt=""
        />
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div className="bg-[#f1fdf7] flex justify-center  py-24 ">
      <div className=" flex w-[1200px]  items-center gap-[200px] ">
        <div className="item flex-[2]  flex flex-col gap-4 ">
          <h1 className="font-medium text-3xl mb-[10px]">A whole world of freelance talent at your fingertips</h1>
          <div className=" flex items-center gap-[10px] font-medium text-gray-500">
            <img  className="w-6 h-6"  src="./img/check.png" alt="" />
            The best for every budget
          </div>
          <p    className="font-light  text-base text-gray-500 leading-6 ">
            Find high-quality services at every price point. No hourly rates,
            just project-based pricing.
          </p>
          <div className=" flex items-center gap-[10px] font-medium text-gray-500">
            <img className="w-6 h-6"  src="./img/check.png" alt="" />
            Quality work done quickly
          </div>
          <p  className="font-light  text-[18px] text-gray-500 leading-6">
            Find the right freelancer to begin working on your project within
            minutes.
          </p>
          <div className=" flex items-center gap-[10px] font-medium text-gray-500">
            <img className="w-6 h-6"  src="./img/check.png" alt="" />
            Protected payments, every time
          </div>
          <p  className="font-light  text-base text-gray-500 leading-6">
            Always know what you'll pay upfront. Your payment isn't released
            until you approve the work.
          </p>
          <div className=" flex items-center gap-[10px] font-medium text-gray-500">
            <img  className="w-6 h-6" src="./img/check.png" alt="" />
            24/7 support
          </div>
          <p className="font-light  text-base text-gray-500 leading-6">
            Find high-quality services at every price point. No hourly rates,
            just project-based pricing.
          </p>
        </div>
        <div className="item flex-[3]">
          <video className="w-[680px]"  src="./img/video.mp4" controls />
        </div>
        </div>
      </div>
  
  );
};
const FeaturesDark = () => {
  return (
    <div className="bg-[#0d084d] flex justify-center  py-24  mt-4">
      <div className=" flex w-[1200px]  items-center gap-[200px] ">
        <div className="item flex-[2]  flex flex-col gap-4 ">
          <h1 className="font-medium text-3xl mb-[10px]   text-white "  >
              fiverr <i>business</i>
            </h1>
            <h1 className="font-medium text-3xl mb-[10px]  text-white">
              A business solution designed for <i>teams</i>
            </h1>
          <p    className="font-light  text-base text-white leading-6 ">
          Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
          </p>
          <div className=" flex items-center gap-[10px] font-light text-white">
            <img className="w-6 h-6"  src="./img/check.png" alt="" />
            Connect to freelancers with proven business experience
          </div>
        
          <div className=" flex items-center gap-[10px] font-light text-white">
            <img className="w-6 h-6"  src="./img/check.png" alt="" />
            Get matched with the perfect talent by a customer success manager
          </div>
      
          <div className=" flex items-center gap-[10px] font-light text-white">
            <img  className="w-6 h-6" src="./img/check.png" alt="" />
            Manage teamwork and boost productivity with one powerful workspace
          </div>
          <button className=" bg-[#1dbf73] active:bg-green-700 text-white py-[8px] px-[20px] rounded-[5px]  text-base w-max mb-5">Explore Fiverr Business</button>
          
        </div>
        <div className="item flex-[3]">
          <img className="w-full"
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
        </div>
        </div>
      </div>
  
  );
};

export default Home;
