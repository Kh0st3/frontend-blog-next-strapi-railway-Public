"use client";

import { cn } from "@/helpers/classnames";
import { Navbar } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    {
        href: "/",
        text: "Home",
    },
    {
        href: "/blog",
        text: "Blog",
    },
    {
        href: "/store",
        text: "Store",
    },
    {
        href: "/cart",
        text: "Cart",
    },
]

const Header = () => {

    const pathname = usePathname();

  return (
    <Navbar
        fluid
        rounded
    >
        <Navbar.Brand>
            <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-6 sm:h-9" 
                alt="Flowbite Logo"
            />
            < span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                Strapi
            </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
            {
                navLinks.map((navLink) => (
                    <Navbar.Link
                        key={navLink.href}
                        href={navLink.href}
                        active= {pathname === navLink.href}
                        as={Link}
                        className={cn(
                            pathname === navLink.href && "md:text-blue-500 bg-gray-950"
                        )}
                >
                    <span className="relative">
                        {navLink.text}
                    </span>
                </Navbar.Link>
                ))
            }
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
