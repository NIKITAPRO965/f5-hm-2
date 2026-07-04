import { IoIosMan } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaMoneyBill } from "react-icons/fa";
import { MdOutlineAirplanemodeActive } from "react-icons/md";
import { MdOutlineAirplanemodeInactive } from "react-icons/md";
import { TbRating18Plus } from "react-icons/tb";
import Text from "../Text/Text";

function Item({ id, name, age, city, email, isActive, salary }) {
  return (
    <li>
      <h2><IoIosMan />: {name}</h2>
      <Text text={age} icon={<TbRating18Plus />}/>
      <Text text={email} icon={<MdEmail />}/>
      <Text text={salary} icon={<FaMoneyBill />}/>
       <Text text={isActive ? "Користувач активний" : "Користувач неактивний"} icon={isActive ? <MdOutlineAirplanemodeActive /> : <MdOutlineAirplanemodeInactive />}/>

      {/* <p>{age > 18 ? "Повнолітній" : "Неповнолітній"}</p>
      <p><MdEmail />: {email}</p>
      <p><FaMoneyBill />: {salary}</p>
      <p>{isActive ? <MdOutlineAirplanemodeActive /> : <MdOutlineAirplanemodeInactive />} {isActive ? "Користувач активний" : "Користувач неактивний"}</p> */}


    </li>
  );
}

export default Item;
