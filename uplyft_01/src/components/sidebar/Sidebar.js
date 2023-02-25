import React from "react";
import "./sidebar.scss";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { MdOutlineHelpOutline } from "react-icons/md";

const Sidebar = () => {
  const sidelinks = [
    {
      name: "dashboard",
      link: "./dashboard",
      icon: <RxDashboard size="35" />,
    },
    {
      name: "profile",
      link: "./profile",
      icon: <RxPerson size="35" />,
    },
    {
      name: "announment",
      link: "./announment",
      icon: <HiOutlineSpeakerphone size="35" />,
    },
    {
      name: "help",
      link: "./help",
      icon: <MdOutlineHelpOutline size="35" />,
    },
  ];
  return (
    <div className="Sidebar">
      <div className="Menu_Icons">
      <AiOutlineMenuUnfold size='70'className="menuicon"/>
      </div>
      <div className="Side_Links">
        {sidelinks.map((link) => {
          return (
            <ul>
              <li>
                {link.icon}<a href={link.link}>{link.name}</a>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
