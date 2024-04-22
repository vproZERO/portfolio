import { Menu } from "@headlessui/react";
import { Fragment } from "react";
import { MenuIcon } from "../assets/menu";

export const DropDown = () => {
  const links = [
    { href: "#projects", label: "Projects" },
    { href: "#games", label: "Games" },
    { href: "#landing", label: "Landing pages" },
    { href: "#footer", label: "Contact" },
  ];

  return (
    <Menu>
      <Menu.Button className={'text-white relative'}>
        <MenuIcon/>
      </Menu.Button>
      <Menu.Items className={'absolute  bg-primaryBg w-[250px] px-7 pt-10  top-0 right-0 z-40 h-full'}>
        {links.map((link) => (
          <Menu.Item
          as="a"
          key={link.href}
          href={link.href}
          className=" text-white"
        >
          <span className="block mb-5 font-bold text-xl">{link.label}</span>
        </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};
