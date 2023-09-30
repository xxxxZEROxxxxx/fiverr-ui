// import { Link } from "react-router-dom";
import { Project } from "../../Data";
type ProCardProps = {
  item: Project;
};

const ProCard = ({ item }: ProCardProps) => {
  return (
    // <Link to={"/gigs?"}>
    <div className="shadow-sm w-[260px] h-[300px] bg-white text-black cursor-pointer rounded overflow-hidden   ">
      <img className="w-full h-[70%] object-cover " src={item.img} alt="" />
      <div className="info flex items-center gap-5 p-4">
        <img className="w-10 h-10 rounded-[50%] object-cover " src={item.pp} alt="" />
        <div className="texts">
          <h2 className="text-[14px] font-medium">{item?.cat}</h2>
          <span className="text-gray-500 text-[14px] "> by {item?.username}</span>
        </div>
      </div>
    </div>
    // </Link>
  );
};

export default ProCard;
