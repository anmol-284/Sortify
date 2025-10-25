import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import React from "react";
import UserDropdown from "./UserDropdown";

const Header: React.FC = () => {
  return (
    <header className="sticky bg-black top-0 shadow-sm z-50">
      <div
        className="
          container 
          mx-auto 
          flex items-center justify-between 
          py-4 
          px-4 sm:px-6 md:px-8 lg:px-12
        "
      >

        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="Sortify logo"
            width={140}
            height={32}
            priority
          />
        </Link>

        {/* Navigation Items (hidden on small screens) */}
        <nav className="hidden sm:block">
          <NavItems />
        </nav>

        {/* User Dropdown */}
        <UserDropdown />
      </div>
    </header>
  );
};

export default Header;
