"use client";
import React from "react";
import { sidebarLinks } from "@/app/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SignedOut } from "@clerk/nextjs";

const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    <section className="background-light900_dark200 light-border sticky left-0 top-0 flex  flex-col h-screen justify-between overflow-y-auto border p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px] custom-scrollbar">
      <div className="flex flex-1 flex-col gap-6   ">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              key={link.route}
              href={link.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900 "
                  : "text-dark300_light900"
              } flex items-center justify-start gap-4 bg-transparent  p-4`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p
                className={`${
                  isActive ? "base-bold" : "base-medium"
                } max-lg:hidden`}
              >
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
      <SignedOut>
        <div className="flex flex-col gap-3 ">
          <Link href="/sign-in">
            <Button className="small-mediuim btn-secondary w-full min-h-[41px] rounded-lg px-4 py-3 shadow-none">
              <Image
                src="assets/icons/account.svg"
                alt="login"
                width={20}
                height={20}
                className="invert-colors lg:hidden "
              />
              <span className="primary-text-gradient max-lg:hidden">Login</span>
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button className="small-mediuim light-border-2 btn-tretiary w-full min-h-[41px] rounded-lg px-4 py-3 shadow-none text-dark400_light900">
              <Image
                src="assets/icons/sign-up.svg"
                alt="signup"
                width={20}
                height={20}
                className="invert-colors lg:hidden "
              />
              <span className="primary-text-gradient max-lg:hidden">
                Signup
              </span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </section>
  );
};

export default LeftSidebar;
