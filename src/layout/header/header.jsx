import { useState } from "react";
import { DropDown } from "../../components/menu";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-primary px-4 md:px-10 md:py-5 py-5 flex items-center justify-between">
      <h2 className="text-white font-bold text-xl">Abduvahobov Abdulahad</h2>
      <div className="md:flex hidden items-center gap-3">
        <a
          className="block text-white font-medium text-md transition hover:-translate-y-1"
          href="#projects"
        >
          Projects
        </a>
        <a
          className="block text-white font-medium text-md transition hover:-translate-y-1"
          href="#games"
        >
          Games
        </a>
        <a
          className="block text-white font-medium text-md transition hover:-translate-y-1"
          href="#landing"
        >
          Landing pages
        </a>
        <a
          className="block text-white font-medium text-md transition hover:-translate-y-1"
          href="#footer"
        >
          Contact
        </a>
      </div>

      <DropDown/>

      
    </div>
  );
};
