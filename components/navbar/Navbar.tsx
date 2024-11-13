import {
  HomeIcon,
  InfoIcon,
  TagIcon,
  PersonIcon,
} from "@primer/octicons-react";
import { v7 } from "uuid";
import { ActiveLink } from "..";

const navItems = [
  {
    path: "/about",
    text: "About",
    icon: <InfoIcon size={24} className="mr-1" />,
  },
  {
    path: "/pricing",
    text: "Pricing",
    icon: <TagIcon size={24} className="mr-1" />,
  },
  {
    path: "/contact",
    text: "Contact",
    icon: <PersonIcon size={24} className="mr-1" />,
  },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-violet-800 bg-opacity-30 p-2 m-2 rounded">
      <ActiveLink
        path="/"
        text="Home"
        icon={<HomeIcon size={24} className="mr-2" />}
      />

      <div className="flex flex-1" />

      {navItems.map((navItem) => {
        return <ActiveLink key={v7()} {...navItem} />;
      })}
    </nav>
  );
};
