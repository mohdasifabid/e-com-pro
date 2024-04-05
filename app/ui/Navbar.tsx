"use client";

import CartIcon from "./CartIcon";
import SearchIcon from "./SearchIcon";

export default function Navbar() {
  return (
    <nav className="h-1440 w-full px-12 py-2">
      <div className="flex justify-end gap-4 h-9 items-center">
        <p className=" text-xs font-normal leading-4 text-left">Help</p>
        <p className=" text-xs font-normal leading-4 text-left">
          Orders & Returns
        </p>
        <p className=" text-xs font-normal leading-4 text-left">Hi, User</p>
      </div>
      <div className="flex justify-between">
        <p className="text-32 font-bold leading-39 text-left">ECOMMERCE</p>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <p className="text-base font-semibold leading-5 text-left">
              Categories
            </p>
            <p className="text-base font-semibold leading-5 text-left">Sale</p>
            <p className="text-base font-semibold leading-5 text-left">
              Clearance
            </p>
            <p className="text-base font-semibold leading-5 text-left">
              New Stock
            </p>
            <p className="text-base font-semibold leading-5 text-left">
              Trending
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <CartIcon />
          <SearchIcon />
        </div>
      </div>
    </nav>
  );
}
