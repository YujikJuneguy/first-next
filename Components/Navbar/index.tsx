import { NavLinks } from "@/MockData/Navigation";
import Link from "next/link";
import React from "react";




const Navbar = () => {
  return (
    <div className="bg-stone-950 py-7 px-5 text-white flex justify-between items-center">
      <div>
        <div>
          <a href="/" className="text-4xl font-semibold">
            ./Logo
          </a>
        </div>
      </div>
      <div>
       {
          NavLinks.map(({id,title,href})=> {
            return <Link className="text-lg ml-10" key={id} href={href}>{title}</Link>
          })
        }
      </div>
    </div>
  );
};

export default Navbar;
