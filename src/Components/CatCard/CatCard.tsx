 import { Link } from "react-router-dom";
import { Card } from "../../Data";
type CatCardProps ={
    item:Card,
}



const CatCard = ({item}:CatCardProps) => {
  return (
    <Link to={"/gigs?"}>
      <div className=" w-[220px] h-[300px] text-white cursor-pointer rounded relative  ">
        
        <img className="w-full h-full object-cover " src={item.img} alt="" />
        <span className=" absolute top-4 left-4 ">{item.desc}</span>
        <span className=" font-medium text-2xl absolute  left-4 top-10">{item.title}</span>

      </div>
     </Link>
  );
};

export default CatCard;
