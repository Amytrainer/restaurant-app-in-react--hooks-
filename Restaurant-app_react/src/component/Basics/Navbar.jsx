import React from "react";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((loopcard) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(loopcard)}>
                {loopcard}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;