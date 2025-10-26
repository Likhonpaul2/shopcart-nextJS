import React from "react";
import Logo from "./Logo";

const FooterBottom = () => {
  return (
    <div className="py-6 border-t text-center text-sm text-gray-600">
      <div>
        © {new Date().getFullYear()} {" "}
        {/* <span className="text-darkColor font-black tracking-wider uppercase hover:text-shop_dark_green hoverEffect group font-sans">
            Shopcar 
            <span className="text-shop_btn_dark_green group-hover:text-darkColor hoverEffect">
                t
            </span>
        </span> */}
        <Logo className="text-sm"/>
        . All rights reserved.
      </div>
    </div>
  );
};

export default FooterBottom;
