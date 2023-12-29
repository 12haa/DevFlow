import React from "react";
import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";
import Theme from "@/app/components/shared/Navbar/Theme";
import MobileNav from "@/app/components/shared/Navbar/MobileNav";

const Navbar = () => {
  return (
    <nav className="flex-between dark:background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12 ">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          width={23}
          height={23}
          alt="siteLogo"
        />
        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">Flow</span>
        </p>
      </Link>
      Globalsearch
      <div className="flex items-center gap-4">
        <Theme />
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
