import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar"

const uniqueList = [
  ...new Set(Menu.map((loopcard) => {
    return loopcard.category;
  })), "All",

];

console.log(uniqueList);


function Resturant() {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList)
  const filterItem = (category) => {
    if(category==="All"){setMenuData(Menu);
    return;
    }
    const updatedList = Menu.filter((loopcard) => {
      return loopcard.category === category;
    }

    );
    setMenuData(updatedList);
  };
  return (
    <>
      <Navbar filterItem={filterItem}
        menuList={menuList} />
      <MenuCard
        menuData={menuData}
      />

    </>
  );
};

export default Resturant;
